#### Heuristica

Cuando buscamos resolver un problema de una complejidad considerable se puede volver complicado encontrar una solución óptima para este. 

La manera en que encontramos soluciones generalmente Busca ser muy concreta o atacar el problema de manera que se entienda perfectamente cómo y de qué modo se puede llegar a la solución. Sin embargo, esto puedo incrementar demasiado la complejidad de la resolución al punto que deja de ser rentable o se vuelve muy ineficiente el encontrar una solución óptima. 

Para muchos problemas la solución puede venir de varias maneras y aunque Generalmente existe una solución más óptima se puede resolver el problema de maneras menos eficientes pero más sencillas de pensar, existiendo soluciones comunes debido a la relativa simpleza con las que uno puede llegar a ellas a pesar de existir mejores soluciones. 

Aquí es cuando el papel de la heurística se vuelve importante pues esta permite tomar un problema complejo y simplificarlo en uno que se puede resolver de manera más simple aunque sin buscar una solución concreta y eficiente, sino que tomando únicamente los elementos mínimos suficientes para poder resolver el problema en cuestión. 

Así se puede llegar a soluciones bastante satisfactorias que además presentan un nivel de simpleza relativamente alto y que puede ser llevadas a cabo de manera aceptablemente eficiente aunque dejando el lugar para una solución más óptima.

#### Solucion

Para la solución de este problema en particular se busca un algoritmo que sea capaz de resolver un laberinto. Este Laberinto tendrá una entrada y una salida y deberá ser capaz de recorrerlo sin atravesar los muros dependiendo de la coordenada que se determine como entrada para devolver la que será entonces la salida. 

La solución parte de la simplificación del problema tomando la matriz binaria de ceros y unos donde los unos serán muros y los ceros un camino. 

La manera en que se podrá resolver es a partir de una coordenada dada que será la entrada se revisarán los espacios, considerándolo como un plano cartesiano, de arriba a abajo izquierda y derecha revisando que existan en la matriz y que además sean un camino que se pueda recorrer. 

Una vez se termine de los cuatro espacios revisados cuál es el que tiene el menor valor pasará a moverse a este nuevo espacio asignando un valor levemente mayor al que se acaba de pasar para que lo considere de menor prioridad que los caminos nuevos pero sin dejar de tomarlo en cuenta en caso de que necesite regresar. 

Así los caminos por los que se vaya avanzando empezarán a tomar valores de 0.1 o 0.2 conforme continúa avanzando hasta que tope con un muro y tenga que regresar o llegué a la salida. Para encontrar la salida lo que hace es tomar en cuenta los valores que representan coordenadas de borde que serían cualquiera que tenga el valor de cero o el valor que represente el tamaño máximo que puede tener la matriz indicando Así que se ha alcanzado un espacio que se encuentra en las orillas y que al ser diferente de la entrada representa entonces la salida determinando Así que se ha tenido Éxito para recorrer El Laberinto. 

En casa no Encontraron la salida terminará retornando la entrada por la que se llegó. 

#### Algoritmo

```
def kevin(matrix, start, entrance):
    row, col = start
    num_rows, num_cols = len(matrix), len(matrix[0])

    if 0 <= row < num_rows and 0 <= col < num_cols:
        up_value = matrix[row - 1][col] if row - 1 >= 0 else float('inf')
        down_value = matrix[row + 1][col] if row + 1 < num_rows else float('inf')
        left_value = matrix[row][col - 1] if col - 1 >= 0 else float('inf')
        right_value = matrix[row][col + 1] if col + 1 < num_cols else float('inf')

        min_value = min(up_value, down_value, left_value, right_value)

        if min_value == up_value:
            moveto = row - 1, col
        elif min_value == down_value:
            moveto = row + 1, col
        elif min_value == left_value:
            moveto = row, col - 1
        elif min_value == right_value:
            moveto = row, col + 1
        
        if moveto[0] == 0 or moveto[0] == num_rows - 1:
            if  moveto != entrance:
                return moveto
        if moveto[1] == 0 or moveto[1] == num_cols - 1:
            if  moveto != entrance:
                return moveto
        
        matrix[row][col] += 0.1
        
        return kevin(matrix, moveto, entrance)

    return None

matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
]

start = (7, 0)

end = kevin(matrix, start, start)
print("Entrada: ", start, "\nSalida:  ", end)

```

#### Funcionamiento

El funcionamiento del algoritmo sigue la solución propuesta y se adapta un código que sea ejecutable por Python. 

El algoritmo al ser recursivo funcionará llamándose a sí mismo cada que encuentre un nuevo espacio. Lo primero es definir Qué información necesita el algoritmo para funcionar, este requiere de una matriz que representará el espacio, un punto que indicará en dónde se encuentra en la matriz, y una coordenada que indica Cuál es la entrada para utilizarla Al momento de diferenciar la salida. 

Este obtiene las coordenadas del punto en que se encuentra Además del tamaño que tiene la matriz. Después válida que el punto existe en la matriz y una vez hecho eso comienza a obtener los valores de los espacios que se encuentran una coordenada arriba, una debajo, una a la izquierda, y una a la derecha, obteniendo después cuál es la coordenada del espacio que tiene el menor valor para así tomar este como el siguiente paso a dar. 

Una vez hecho eso se obtendrá la coordenada de este nuevo espacio y se analizará que esta no sea una salida, de no serlo Se volverá a llamar la función de manera recursiva pasando la matriz donde el valor de la coordenada por la que se acaba de pasar se aumentará en 0.1, se le pasará un nuevo punto de Start qué será el espacio al que se deberá de mover y el mismo punto de entrada para que la pueda diferenciar de la salida. 

Una vez hecho esto se le puede mandar una matriz inicial que posea un único Cero en el borde y un camino recorrible donde la matriz puede tener cualquier tamaño y se respete los ceros y unos como representaciones de Laberinto. Este lo resolverá recorriéndolo para finalmente devolver el punto de entrada y el de salida.