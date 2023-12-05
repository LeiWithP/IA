var w = 800;
var h = 400;
var jugador;
var fondo;

var bala,
  balaD = false,
  nave;

var salto;
var menu;

var moveLeft;
var moveRight;

var velocidadBala;
var despBala;
var despBalaY;
var difBalaY;
var moveBack = 0;
var waitFor = 0;
var waitFall = 0;
var isFalling = true;
var estatusSalto;
var estatusAdelante;

var nnNetwork,
  nnEntrenamiento,
  nnSalida,
  datosEntrenamiento = [];
var modoAuto = false,
  eCompleto = false;

var juego = new Phaser.Game(w, h, Phaser.CANVAS, "", {
  preload: preload,
  create: create,
  update: update,
  render: render,
});

function preload() {
  juego.load.image("fondo", "assets/game/fondo.jpg");
  juego.load.spritesheet("mono", "assets/sprites/altair.png", 32, 48);
  juego.load.image("nave", "assets/game/ufo.png");
  juego.load.image("bala", "assets/sprites/purple_ball.png");
  juego.load.image("menu", "assets/game/menu.png");
}

function create() {
  juego.physics.startSystem(Phaser.Physics.ARCADE);
  juego.physics.arcade.gravity.y = 800;
  juego.time.desiredFps = 30;

  fondo = juego.add.tileSprite(0, 0, w, h, "fondo");
  nave = juego.add.sprite(w - 100, h - 70, "nave");
  bala = juego.add.sprite(w - 100, h, "bala");
  balaFall = juego.add.sprite(50, h - 500, "bala");
  jugador = juego.add.sprite(50, h, "mono");

  juego.physics.enable(jugador);
  jugador.body.collideWorldBounds = true;
  var corre = jugador.animations.add("corre", [8, 9, 10, 11]);
  jugador.animations.play("corre", 10, true);

  juego.physics.enable(bala);
  juego.physics.enable(balaFall);
  bala.body.collideWorldBounds = true;
  balaFall.body.collideWorldBounds = true;

  moveLeft = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  moveRight = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  pausaL = juego.add.text(w - 100, 20, "Pausa", {
    font: "20px Arial",
    fill: "#fff",
  });
  pausaL.inputEnabled = true;
  pausaL.events.onInputUp.add(pausa, self);
  juego.input.onDown.add(mPausa, self);

  salto = juego.input.keyboard.addKey(Phaser.Keyboard.UP);

  nnNetwork = new synaptic.Architect.Perceptron(4, 8, 8, 2);
  nnEntrenamiento = new synaptic.Trainer(nnNetwork);
}

function enRedNeural() {
  nnEntrenamiento.train(datosEntrenamiento, {
    rate: 0.0003,
    iterations: 10000,
    shuffle: true,
  });
}

function datosDeEntrenamiento(param_entrada) {
  console.log(
    "Entrada",
    param_entrada[0] +
      " " +
      param_entrada[1] +
      " " +
      param_entrada[2] +
      " " +
      param_entrada[3]
  );
  nnSalida = nnNetwork.activate(param_entrada);
  var salto = Math.round(nnSalida[0] * 100);
  var adelante = Math.round(nnSalida[1] * 100);
  console.log("Valor ", "En el salto %: " + salto);
  console.log("Valor ", " Adelante %: " + adelante);
  var salidas = [];
  salidas[0] = nnSalida[0];
  salidas[1] = nnSalida[1];
  return salidas;
}

function pausa() {
  juego.paused = true;
  menu = juego.add.sprite(w / 2, h / 2, "menu");
  menu.anchor.setTo(0.5, 0.5);
}

function mPausa(event) {
  if (juego.paused) {
    var menu_x1 = w / 2 - 270 / 2,
      menu_x2 = w / 2 + 270 / 2,
      menu_y1 = h / 2 - 180 / 2,
      menu_y2 = h / 2 + 180 / 2;

    var mouse_x = event.x,
      mouse_y = event.y;

    if (
      mouse_x > menu_x1 &&
      mouse_x < menu_x2 &&
      mouse_y > menu_y1 &&
      mouse_y < menu_y2
    ) {
      if (
        mouse_x >= menu_x1 &&
        mouse_x <= menu_x2 &&
        mouse_y >= menu_y1 &&
        mouse_y <= menu_y1 + 90
      ) {
        eCompleto = false;
        datosEntrenamiento = [];
        modoAuto = false;
      } else if (
        mouse_x >= menu_x1 &&
        mouse_x <= menu_x2 &&
        mouse_y >= menu_y1 + 90 &&
        mouse_y <= menu_y2
      ) {
        if (!eCompleto) {
          console.log(
            "",
            "Entrenamiento " + datosEntrenamiento.length + " valores"
          );
          enRedNeural();
          eCompleto = true;
        }
        modoAuto = true;
      }

      menu.destroy();
      resetFall(50);
      resetVariables();
      juego.paused = false;
    }
  }
}

function resetVariables() {
  bala.position.x = w - 100;
  bala.position.y = h;
  bala.body.velocity.x = 0;
  jugador.body.velocity.x = 0;
  jugador.body.velocity.y = 0;
  // jugador.position.x = 50;
  balaD = false;
}

function resetFall(playerPosX) {
  balaFall.position.x = playerPosX;
  balaFall.position.y = h - 500;
  waitFall++;
  if (waitFall > waitFor) {
    isFalling = true;
    waitFall = 0;
    waitFor = velocidadRandom(20, 50);
  }
}

function saltar() {
  jugador.body.velocity.y = -270;
}

function update() {
  fondo.tilePosition.x -= 1;

  juego.physics.arcade.collide(bala, jugador, colisionH, null, this);
  juego.physics.arcade.collide(balaFall, jugador, colisionH, null, this);
  estatusSalto = 0;
  estatusAdelante = 0;

  if (!jugador.body.onFloor()) {
    estatusSalto = 1;
  }

  despBala = Math.floor(jugador.position.x - bala.position.x);
  despBalaY = Math.floor(jugador.position.y - balaFall.position.y);
  difBalaY = Math.floor(jugador.position.x - balaFall.position.x);

  if (!isFalling) {
    resetFall(jugador.position.x);
  }

  if (modoAuto == false && moveRight.isDown) {
    jugador.body.velocity.x = 200;
    estatusAdelante = 1;
    moveBack++;
  } else if (modoAuto == false && moveBack > 0) {
    jugador.body.velocity.x = -200;
    moveBack--;
  } else if (modoAuto == false) {
    jugador.body.velocity.x = 0;
  } else {
    if (modoAuto == true) {
      var bot = datosDeEntrenamiento([
        despBala,
        velocidadBala,
        despBalaY,
        difBalaY,
      ]);
      if (bot[0] > 0.6 && jugador.body.onFloor()) {
        saltar();
      }
      if (Math.abs(bot[1]) > 0.6) {
        jugador.body.velocity.x = 200;
        moveBack++;
        console.log("moveback->", moveBack);
      } else if (moveBack > 0) {
        jugador.body.velocity.x = -200;
        moveBack--;
        console.log("moveback<-", moveBack);
      } else {
        jugador.body.velocity.x = 0;
        console.log("moveback", moveBack);
      }
    }
  }

  if (modoAuto == false && salto.isDown && jugador.body.onFloor()) {
    saltar();
  }

  if (balaD == false) {
    disparo();
  }

  if (bala.position.x <= 0) {
    resetVariables();
  }

  if (balaFall.body.onFloor()) {
    isFalling = false;
  }

  if (modoAuto == false && bala.position.x > 0) {
    datosEntrenamiento.push({
      input: [despBala, velocidadBala, despBalaY, difBalaY],
      output: [estatusSalto, estatusAdelante],
    });

    console.log("Bala X, Bala Speed, Bala Y, Dif Caida X");
    console.log(
      despBala + " " + velocidadBala + " " + despBalaY + " " + difBalaY
    );
    console.log("Salto, Atras, Adelante: ");
    console.log(estatusSalto + " " + estatusAdelante);
  }
}

function disparo() {
  velocidadBala = -1 * velocidadRandom(400, 600);
  bala.body.velocity.y = 0;
  bala.body.velocity.x = velocidadBala;
  balaD = true;
}

function colisionH() {
  pausa();
}

function velocidadRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {}
