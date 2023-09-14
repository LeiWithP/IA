
# Medida de Rendimiento

- Victoria: El jugador gana el juego si forma una linea recta, con el valor que tenga asignado, a lo largo de cualquier eje del cubo de 3x3

- Derrota: El jugador pierde en el momento que el contrario forma una linea en el cubo

- Empate: El juego termina en empate si al ocuparse todos los espacios ningun jugador fue capaz de completar una linea en el cubo

# Estrategia

- La maquina dara prioridad a los espacios que abarquen mas dimensiones, buscando jugar en ellos siempre que pueda y saltando al siguiente nivel de prioridad en caso de estar todos los espacios de un tipo ocupados, teniando esta prioridad:

1. Centro del Cubo

2. Esquinas

3. Aristas

4. Centro de Cara

- Ademas la maquina buscara formar lineas, cuando no tenga bloqueado si movimiento para evitar que el contrincante gane, jugando lo mas cerca posible de las jugadas enemigas para bloquear posibles intentos de ganar

- Cada vez que juegue la maquina esta ignorara, como posibles amenazas, las posibles filas con las que intercepte sus jugadas pues estas ya no podrán ser líneas ganadoras para el enemigo

# Secuencia de Percepción

### 1. Inicio del Juego
- El juego comienza en un cubo de 3x3x3 vacío
- Se decide aleatoriamente que jugador comienza
### 2. Análisis de Victoria
- En caso de poder formar una línea para ganar el juego, se jugara en dicha casilla como máxima prioridad
### 3. Análisis de la ultima jugada
- Se analiza la ultima jugada del contrincante para determinar si esta a punto de ganar
-  En caso de estar a punto de ganar se hará una jugada para bloquear al contrincante
- En caso de no existir riesgo se jugara en la siguiente casilla de mayor prioridad
- Si se comenzó primero se ignorara este paso este turno
### 4. Selección de Casillas de Juego
- La casilla de mayor prioridad será determinada si el contrincante no esta a punto de ganar
- Esta seguirá un orden de prioridad según se vayan ocupando todas las demás casillas
- En caso de estar ocupadas todas las casilla de cierta prioridad pasará a jugar en la siguiente en la lista de relevancia
- La lista sigue este orden: centro del cubo, esquinas, aristas y centro de cara exterior
### 5. Selección de posición de jugada
- Según que tipo de casillas estén disponibles se seleccionara una de ellas en base a cual se acerca mas alguna jugada riesgosa del contrincante, buscando bloquear posibles líneas de victoria
- Las jugadas riesgosas se determinan si el contrincante tiene un eje libre para completar una línea
- En caso de no tener posibilidad de completar una línea en algún eje este se ignora y se baja su prioridad
### 6. Jugada
- Según la prioridad obtenida se jugara en la casilla donde esta sea mas alta para pasar al turno del contrincante y esperar a su jugada
- La mayor prioridad siempre será la jugada que otorgue la victoria, seguida de la que evite la derrota
- Los casos de repetirán hasta ganar o empatar