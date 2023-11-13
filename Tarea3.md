### Ensayo

La base del problema plantea un tablero de 4 x 5 donde en las filas superiores e inferior se encuentran cuatro alfiles de cada color. El problema a resolver es invertir las posiciones de los alfiles, sin importar su orden en la fila, moviendo los alfiles de un color que se encuentran en la parte superior a la inferior y viceversa. Además se debe de realizar solo un movimiento cada vez y debe alternarse entre un alfil y un color y otro, ni modo que no se puede mover el mismo alfil dos veces seguidas.

Primero se determinó la cantidad mínima de movimientos en los que se puede terminar, debido a que el tablero tiene cinco filas y ambos alfiles se encuentran en la parte más alejada de estas, no es posible que un alfil, sin sin importar en qué posición esté, llegue al otro lado en un solo movimiento por lo que mínimo deberá realizar dos movimientos para llegar a cualquier punto del otro lado.

Por ello se puede obtener la cantidad mínima de movimientos posibles que sería el doble de la cantidad de alfiles que hay, habiendo en este caso ocho alfiles el mínimo de movimientos es 16. Así entonces se planea la estrategia de juego. Esta se formuló de acuerdo a la idea de que cada que se moviese un alfil de un color en una casilla tendría que moverse otro alfil de otro color en una casilla del mismo color en la que se movió el primer alfil, o sea que si un alfil negro sale de la casilla negra, se deberá mover un alfil blanco de una casilla negra de modo que ambos puedan reemplazar las casillas que abandonaron. Así los primeros movimientos son alternando alfiles impares sacándolos a puntos que les permitan entrar a la casilla abandonada del otro lado. Los movimientos que se realizan en esta sección de juego colocarán a los alfiles de un color en una misma columna y a los alfiles del otro color en una misma fila sin que estos compartan ninguna, de alfiles de diferente color. Entonces quedarían por ejemplo dos alfiles negros en la fila 3, sin que haya alfiles blancos en esa fila, y dos alfiles blancos en la columna 5, sin que haya alfiles negros en esa columna. Esto permitirá realizar los mismos movimientos de manera invertida para colocar cada alfil en el lado opuesto. Esta serie de movimientos, al cuatro alfiles de un lado al otro, completa un total de ocho movimientos en total. Este mismo proceso se repite con los alfiles que falten siguiendo la misma estrategia y completando otros ocho movimientos terminando en una cantidad final de 16, qué es la mínima posible.

El problema en sí no representa mayor dificultad debido a que de manera lógica es posible deducir las reglas principales que llevarán al resultado más óptimo. 

El hecho de que los alfiles solo tengan un tiempo de movimiento tiene gran factor de determinismo en cómo es posible realizar las distintas jugadas, además de que la forma del tablero deriva a que uno se intenta realizar la mayor traslación posible se termine tropezando con que existe un muro que impide que se alcance del otro lado de ninguna manera con un primer movimiento. 

Esto a su vez deriva a que se deduzca el número mínimo de movimientos y debido a las reglas preestablecidas que determinan cómo es posible realizar las distintas jugadas, implicando una alternación que ya está asociada a las propias reglas de un juego normal de ajedrez, terminan por determinar de manera prácticamente inevitable la conclusión lógica más eficiente sin que realmente tenga uno que dedicar demasiado esfuerzo a la idea de conseguir esta salida. 

Existe la posibilidad de que los propios movimientos lleguen a interferir entre sí y te lleven a requerir de más movimientos, aún así Esto es algo que con la mínima noción de cómo es que funcionan los juegos de ajedrez, o tan siquiera con la idea de acomodar con previsión Cómo es que se van a mover y en qué posición quieres que termine en cada una de las piezas puedas terminar evitando que los distintos movimientos interfieran con los siguientes que quieres realizar además de permitir que cada pieza esté a una distancia considerable y sin estar demasiado cerca de otras que puedan llegar a buscar utilizar su misma posición o interactuar accidentalmente con esta. 

Ese tipo de problemas son fácilmente resolubles por una máquina debido a lo ya mencionado, como la solución más óptima se puede derivar lógicamente a partir de las mismas reglas preestablecidas implica que una máquina no le costará demasiado trabajo relativamente hablando en llegar a la misma conclusión a la que podemos llegar nosotros. Esto va cambiando dependiendo de cómo vaya ganando complejidad por ejemplo utilizando otro tipo de piezas como lo podrían ser los caballos se generaría un tipo de problema que implicaría un mayor análisis de los posibles resultados disminuyendo entonces los movimientos válidos y llevando así a que en general su mapa de los distintos estados más preciso y que conlleve más trabajo para poder obtener la solución más óptima.

Existe otro tipo de problemas que manejan ese mismo tipo de base y que derivan a teorías de juegos más avanzadas y con los movimientos implicados. Así es como a partir de movimientos simples y reglas sencillas se pueden llegar a generar problemas en teoría de juegos que impliquen cambios drásticos según aumenta el nivel de complejidad en Cómo es necesario analizar los problemas así como en cuál es realmente el resultado que se debe alcanzar y tomando en cuenta que no siempre se podrá llegar al resultado más óptimo o tan siquiera determinar si es que ese resultado es posible debido a la propia teoría de cómo es que funcionan los problemas y sus soluciones. 

Aún así la capacidad que tienen las inteligencias artificiales para la resolución de problemas complejos y simples puede ser determinada según como se le ingresen los distintos factores o variables en fuego y cómo se establezcan las reglas que lleven a este caso más óptimo o tomando en cuenta que esto es algo así como teoría de juegos, llegué a la victoria absoluta. 
Así es como múltiples inteligencias artificiales O sea a juegos o a resolver problemas pueden obtener resultados de estados que el sistema general algoritmos para solucionar de maneras extremadamente rápidas y eficientes problemas que nosotros como seres humanos pensantes en tiempos más cortos, al menos comparados con los que puede tardar en pensar una computadora te mando en cuenta que esta maneja cientos de miles de valores por segundo, para lograr tareas difíciles antes que cualquier otra persona. 

Vale la pena tener como es que se soluciona ese tipo de problemas para comprender mejor cómo es que funciona de manera interna dando nuestra propia psique como la de una computadora y cómo es que ésta se relacionan Al momento de resolver problemas y cómo pueden llegar a tener resultados diferentes a pesar de seguir procesos similares estar basados en el modelo que aunque no exacto y muy derivado del aprendizaje humano demostrando además Cómo es que existen tantas diferencias entre las mismas personas.

### Solución

1.

|  A1  |  A2  |  A3  |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  B1  |  B2  |  B3  |  B4  |



2.

|  -   |  A2  |  A3  |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  A1  |
|  B1  |  B2  |  B3  |  B4  |



3.

|  -   |  A2  |  A3  |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  B1  |  -   |
|  -   |  -   |  -   |  A1  |
|  -   |  B2  |  B3  |  B4  |



4.

|  -   |  A2  |  -   |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  A3  |
|  -   |  -   |  B1  |  -   |
|  -   |  -   |  -   |  A1  |
|  -   |  B2  |  B3  |  B4  |



5.

|  -   |  A2  |  -   |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  A3  |
|  B3  |  -   |  B1  |  -   |
|  -   |  -   |  -   |  A1  |
|  -   |  B2  |  -   |  B4  |



6.

|  -   |  A2  |  -   |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  A3  |
|  B3  |  -   |  B1  |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  B2  |  A1  |  B4  |



7.

|  B1  |  A2  |  -   |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  A3  |
|  B3  |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  B2  |  A1  |  B4  |



8.

|  B1  |  A2  |  -   |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  B3  |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  A3  |  B2  |  A1  |  B4  |



9.

|  B1  |  A2  |  B3  |  A4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  A3  |  B2  |  A1  |  B4  |



10.

|  B1  |  -   |  B3  |  A4  |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  A3  |  B2  |  A1  |  B4  |



11.

|  B1  |  -   |  B3  |  A4  |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  -   |  -   |  B2  |
|  -   |  -   |  -   |  -   |
|  A3  |  -   |  A1  |  B4  |



12.

|  B1  |  -   |  B3  |  -   |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  -   |  -   |  B2  |
|  A4  |  -   |  -   |  -   |
|  A3  |  -   |  A1  |  B4  |



13.

|  B1  |  -   |  B3  |  -   |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  B4  |  -   |  B2  |
|  A4  |  -   |  -   |  -   |
|  A3  |  -   |  A1  |  -   |



14.

|  B1  |  -   |  B3  |  -   |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  B4  |  -   |  B2  |
|  -   |  -   |  -   |  -   |
|  A3  |  A4  |  A1  |  -   |



15.

|  B1  |  -   |  B3  |  B4  |
| :--: | :--: | :--: | :--: |
|  A2  |  -   |  -   |  -   |
|  -   |  -   |  -   |  B2  |
|  -   |  -   |  -   |  -   |
|  A3  |  A4  |  A1  |  -   |



16.

|  B1  |  -   |  B3  |  B4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  B2  |
|  -   |  -   |  -   |  -   |
|  A3  |  A4  |  A1  |  A2  |



17.

|  B1  |  B2  |  B3  |  B4  |
| :--: | :--: | :--: | :--: |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  -   |  -   |  -   |  -   |
|  A3  |  A4  |  A1  |  A2  |


# 
