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
var modeD = true;
//var lockMode = true;
var estatusSalto;
var estatusAtras;
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
  jugador = juego.add.sprite(50, h, "mono");

  juego.physics.enable(jugador);
  jugador.body.collideWorldBounds = true;
  var corre = jugador.animations.add("corre", [8, 9, 10, 11]);
  jugador.animations.play("corre", 10, true);

  juego.physics.enable(bala);
  bala.body.collideWorldBounds = true;

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

  nnNetwork = new synaptic.Architect.Perceptron(3, 8, 3);
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
    param_entrada[0] + " " + param_entrada[1] + " " + param_entrada[2]
  );
  nnSalida = nnNetwork.activate(param_entrada);
  var salto = Math.round(nnSalida[0] * 100);
  var atras = Math.round(nnSalida[1] * 100);
  var adelante = Math.round(nnSalida[2] * 100);
  console.log("Valor ", "En el salto %: " + salto);
  console.log("Valor ", "Atras %: " + atras + " Adelante %: " + adelante);
  var salidas = [];
  salidas[0] = nnSalida[0];
  salidas[1] = nnSalida[1] - nnSalida[2];
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
      resetVariables();
      juego.paused = false;
    }
  }
}

function resetVariables() {
  // if (!lockMode) {
  //   lockMode = true;
  //   modeD = Math.random() < 0.5;
  // }
  // if (modeD) {
    bala.position.x = w - 100;
    bala.position.y = h;
  // } else {
  //   bala.position.x = 50;
  //   bala.position.y = 0;
  // }
  bala.body.velocity.x = 0;
  jugador.body.velocity.x = 0;
  jugador.body.velocity.y = 0;
  jugador.position.x = 50;
  balaD = false;
}

function saltar() {
  jugador.body.velocity.y = -270;
  // lockMode = false;
}

function update() {
  fondo.tilePosition.x -= 1;

  juego.physics.arcade.collide(bala, jugador, colisionH, null, this);
  estatusSalto = 0;

  estatusAtras = 0;
  estatusAdelante = 0;

  if (!jugador.body.onFloor()) {
    estatusSalto = 1;
  }

  despBala = Math.floor(jugador.position.x - bala.position.x);
  despBalaY = Math.floor(jugador.position.y - bala.position.y);

  // if (moveLeft || moveRight) lockMode = false;

  if (modoAuto == false && moveLeft.isDown) {
    jugador.body.velocity.x = -200;
    estatusAtras = 1;
    estatusAdelante = 0;
  } else if (modoAuto == false && moveRight.isDown) {
    jugador.body.velocity.x = 200;
    estatusAtras = 0;
    estatusAdelante = 1;
  } else {
    jugador.body.velocity.x = 0;
    estatusAtras = 0;
    estatusAdelante = 0;
  }

  if (modoAuto == false && salto.isDown && jugador.body.onFloor()) {
    saltar();
  }

  if (modoAuto == true) {
    var bot = datosDeEntrenamiento([despBala, velocidadBala, despBalaY]);
    if (bot[0] > 0.6 && jugador.body.onFloor()) {
      saltar();
    }
    // console.log("bot[1]: ", bot[1])
    if (Math.abs(bot[1]) > 0.2) {
      if (bot[1] > 0) {
        jugador.body.velocity.x = -200;
      } else {
        jugador.body.velocity.x = 200;
      }
    }
  }

  if (balaD == false) {
    disparo();
  }

  if (bala.position.x <= 0) {
    resetVariables();
  }

  if (bala.body.onFloor() && !modeD) {
    resetVariables();
  }

  if (modoAuto == false && bala.position.x > 0) {
    datosEntrenamiento.push({
      input: [despBala, velocidadBala, despBalaY],
      output: [estatusSalto, estatusAtras, estatusAdelante],
    });

    console.log("Bala X, Bala Speed, Bala Y, ");
    console.log(despBala + " " + velocidadBala + " " + despBalaY);
    console.log("Salto, Atras, Adelante: ");
    console.log(estatusSalto + " " + estatusAtras + " " + estatusAdelante);
  }
}

function disparo() {
  velocidadBala = -1 * velocidadRandom(300, 800);
  // if (modeD) {
    bala.body.velocity.y = 0;
    bala.body.velocity.x = velocidadBala;
  // } else {
  //   bala.body.velocity.y = velocidadBala;
  //   bala.body.velocity.x = 0;
  // }
  balaD = true;
}

function colisionH() {
  pausa();
}

function velocidadRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {}
