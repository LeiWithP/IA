# Phaser

## Modificaciones

### 1. Cambio Capas Ocultas

- #### Al modificar el numero de capas ocultas de 2, de 6 neuronas, a 5, de 3 neuronas, el programa dejo de ser capaz de aprender

### 2. Cambio Fuerza de Salto

- #### Al modificar la fuerza del salto a -200 se volvió necesario ser mas preciso, sin embargo la red neuronal no tuvo problema en aprender

### 3. Aumento de Rango Velocidad del Proyectil

- #### Al aumentar el rango de valores en los que puede varias la velocidad del proyectil de 300 - 800 a 100 - 1400 a la red neuronal le comenzó a dar más trabajo entender como reaccionar a las distintas velocidades y fue necesario mas tiempo de entrenamiento para obtener un resultado aceptable

## Caso Proyectil Oscilante

## Entradas

#### Debido a la oscilación el proyectil se desplaza en 2 ejes con 2 velocidades distintas por lo que las entradas se deberían de duplicar, siendo ahora 4

## Salidas

#### Las salidas ya que además de un salto habría un desplazamiento horizontal por parte del personaje deberían de dar 2 como resultado, una para indicar el salto y otra para indicar el desplazamiento del personaje

## Capas Ocultas

#### Las capas ocultas en principio no se sabría como calcular, pero ya que es un problema mas complejo que el anterior quizá funcionaria aumentando ya sea capas ocultas o neuronas

