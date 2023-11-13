### Introducción 

De manera digital las imágenes Se han manejado tomando distintos espacios o píxeles a los que se les asigna un valor que es mostrado en monitor. Esto antes funcionaba de manera monocromática y permitía dibujar imágenes a partir de únicamente dos colores, dibujando en una matriz que sería la representación de la pantalla distintos valores que variarían entre 0 y 1 para mostrar la imagen al unirlos todos en una sola formación bidimensional que se mostraría a través de una interfaz, que en aquel tiempo únicamente podía hacer una pantalla. 

Conforme se avanzó la tecnología fue capaz de manejarse valores de arreglos simples dentro de cada valor de esta matriz, estos valores serían la representación de colores más complejos a partir de unos principales, como es en el rgb tres valores y un Alfa que representa la opacidad. Así se podría dibujar una matriz donde cada valor tendría en sí un arreglo de tres valores o cuadros y se incluía El Alfa y estos a su vez generarían un promedio que dibujaría en una pantalla que permite hacer color una imagen con colores mucho más complejos que podrían variar de acuerdo a todas las combinaciones posibles de los valores en cada arreglo de cada Pixel de cada imagen aumentando de una cantidad muy baja a una cantidad absurdamente grande de combinaciones y valores que ahora podrían representar distintas imágenes dentro de múltiples tipos de pantalla. 

El problema planteado en esta sección en realidad es algo muy similar a lo anteriormente resuelto en una matriz simple solo que ahora se deberá manejar una matriz mucho más grande y darle al que se tendrá que diferenciar elementos que No necesariamente pueden ser valorados de un único modo y generando una igualdad específica a la que se tiene que buscar de modo que si antes teníamos que buscar Islas ahora lo que tenemos que buscar son segmentos con valores dentro de un Rango asociado promediando los valores dentro del arreglo de cada sección de la matriz principal.

### Desarrollo

Como ya se mencionó anteriormente Este es un problema que asemeja muchísimo al anterior donde se manejaba una matriz bidimensional. 

Lo que hacen realmente las imágenes de dibujar en una matriz múltiples valores en cada uno de sus segmentos o píxeles así nosotros podemos tomar una imagen en blanco y negro y aplicar el mismo algoritmo que se diseñó para la búsqueda de Islas y así diferenciar cada elemento que contenga de manera continua uno de los tipos de píxeles permitidos en esa imagen monocromática. 

Para el caso de una imagen a color si lo que queremos es diferenciar uno de los colores en particular primero Debemos entender qué es lo que estamos buscando. 
Como dijimos en la sección de las imágenes se puede realizar una distinción entre varios valores de modo que se pueden buscar Islas que tengan de valor uno luego otras que tengan el valor de dos y así sucesivamente diferenciando cada una del resto. 

Lo que estamos haciendo en una imagen a color Es que además de representar cada color con un valor en cada Pixel los valores en sí tienen múltiples números pues poseen un arreglo que representa un color en un tipo de formato. Por eso es que nosotros no podemos determinar de manera tan precisa y determinada un solo color pues el rojo no será solo una combinación de estos valores sino que podrán ser varias y que Irán dentro de un Rango específico por lo que se tendrá que determinar a partir de dónde Y hasta qué valor nosotros consideramos que algo es de color rojo. 

Para esto Entonces nosotros tenemos que comenzar generando un Rango de valores que nosotros son los que queremos explorar y así determinar Qué elementos son los que vamos a diferenciar del resto. Este Rango de valores deberá tomar en cuenta cada vector de cada Pixel por lo que será una combinación de múltiples valores donde cada uno de ellos tendrá un Rango específico pudimos nosotros determinar por ejemplo el rango en un vector más pequeño. 

Este sería llamado vector de comparación Y determinaría qué valores pueden ser aceptados comparando como si fuese un Rango de colores que nosotros pudiésemos ver y viendo el color que estamos comparando para así determinar si es parecido o no y decidir si queremos descartarlo o no. 

Así nosotros podríamos generar un algoritmo muy similar al de las Islas donde en lugar de determinar si hay un valor igual al en que estamos parados veríamos más bien un Rango de valores y podríamos así nosotros generar una isla a partir de estos distintos valores sin tener que limitarnos a uno único. 
Otro problema que podría surgir dentro del determinar Cuántos objetos existen de un solo color podría ser el arreglo en el que están acomodados los distintos elementos o píxeles que conforman un objeto dentro de la imagen, pues Si hubiesen píxeles en diagonal o pixeles ligeramente alejados pero que conforman parte de un mismo objeto, como puede ser al tener un elemento separado por un ligero contorno de un color diferente, nosotros contaríamos estos como parte de distintos objetos en lugar de considerarlo uno solo. 

Este tipo de calibración se puede corregir si nosotros tomamos en cuenta un Rango alrededor del que se valen los distintos objetos como si nosotros al ejecutar el algoritmo de manera física tuviésemos que dar pasos extras asumiendo que quizá el color adyacente no es el mismo pero una casilla después sí que lo es por lo que tendríamos que dar pasos extra. 

También tendríamos que considerar dar pasos en diagonal de modo que habría que agregar cuatro nuevos estados a los que habría que explorar y dentro de cada uno de esos volver a hacer la exploración de los cuatro nuevos estados considerando ahora todo el contorno adyacente posible de cada Pixel. 
De este modo se puede notar como la complejidad de este tipo de matriz sí que incrementa la dificultad de la resolución Aunque al final sigue siendo una muy similar a la de su versión simplificada.

Ese tipo de problemas Agrega una complejidad avanzada debido a que en las distintas imágenes no siempre va a ser del mismo modo que en las más sencillas. 

Por ello puede que la misma solución no sea efectiva para todo tipo de problemas y se tienen que comenzar a desarrollar algoritmos mucho más específicos y que atacan de manera más puntual al problema que se está buscando resolver. 

Puede ser que nosotros busquemos objetos muy claramente definidos y sin contornos por los que podríamos aplicar una solución más sencilla que nos permitiría ser más eficientes. 

También Pudiste ser que nosotros estuviésemos manejando colores muy definidos y que no varían en su Rango donde la paleta de color está bastante limitada pudiendo nosotros ejecutar el algoritmo sin necesidad de definir un Rango y generando simplemente promedios a partir de los cuales nosotros podríamos continuar la búsqueda como en el algoritmo principal. 

Así pueden haber multitud de casos donde la solución más efectiva no va a ser la misma que para otros. Nosotros tenemos que determinar de manera particular y según lo que nosotros queramos encontrar cuál algoritmo es más eficiente y Qué métodos pueden ser los necesarios o los más óptimos para llegar a una solución que se pueda considerar la mejor. 

Aquí es donde demuestra su efectividad la Inteligencia artificial. A nosotros requerir analizar un conjunto de imágenes para determinar Cuál es la mejor manera de encontrar cierto elemento nosotros nos vemos en la necesidad de desarrollar un algoritmo diferente cada vez. La Inteligencia artificial lo que logra es ejecutar esos análisis y determinar así Ella misma Cuál es la mejor manera de obtener ciertos resultados o de encontrar Cuáles son los elementos que se están buscando de acuerdo a parámetros que nosotros le definamos diciéndole o mostrándole en este caso los elementos de una imagen que nosotros sabemos que están allí y que queremos buscar y entrenarla mediante estos elementos para que ella sea capaz de determinar el algoritmo preciso y más efectivo para encontrar elementos similares en imágenes nuevas que nosotros le podamos dar a futuro. 

En cierto modo lo que estamos haciendo es un algoritmo que se encarga de buscar algoritmos al ejecutar un análisis exhaustivo y profundo que nosotros de otro modo nos costaría mucho trabajo o tendríamos que hacer manualmente cada que quisiésemos cambiar el elemento o tipo de imagen que buscamos o tenemos que manejar además de no ser fácil el combinarlo con otro tipo de modelos ya existentes. 
Por ello Es que la Inteligencia artificial se vuelve relevante al resolver este tipo de problemas que varían a partir de uno más sencillo Pues nos ayudan a generar soluciones específicas a problemas particulares.

### Conclusión

Así nosotros podemos darnos cuenta de la relevancia que tiene las ciencias enfocadas en la Inteligencia artificial pues estas nos ayudan a la resolución de problemas que se vuelven más complejos y específicos conforme se Avanza en cierto sector. 

Nosotros podemos desarrollar un algoritmo específico para problemas simples como lo puede hacer la búsqueda de Islas, sin embargo conforme estos problemas van agarrando complejidad y se van rodeando de factores que nosotros no habíamos considerado Al momento de desarrollar el algoritmo principal se complican de manera exponencial e implican resoluciones para las que nosotros Puede que no estuviésemos preparados lo que requerirían de muchísima capacidad y tiempo en resolver. 

Al final estamos delegando la tarea de solucionar un problema a un algoritmo que se encarga de eso de solucionar problemas a partir de un análisis exhaustivo lo que es capaz de ahorrarnos muchísimo trabajo al momento de desarrollar algoritmos muy particulares. 

Nosotros podemos enfocar este tipo de análisis en búsquedas Como por ejemplo de células en imágenes de un tipo en particular, o de un tipo de estrellas que se iluminan con una frecuencia muy específica que incluso puede ser difícil de ver para el ojo humano pero que una computadora es capaz de buscar en imágenes enormes generadas por telescopios y a través de vastas y vastas extensiones de espacio con estrellas tan diminutas que una persona le tomaría muchísimo tiempo y entrenamiento el poder reconocer de manera eficaz. 

Estos son el tipo de tareas que nosotros buscamos en las que nos ayuden las inteligencias artificiales pues son tareas para las que nosotros no podemos prepararnos absolutamente o completar de manera a 100% efectiva debido a que nuestras capacidades humanas nos lo impiden y que aunque Nosotros somos capaces de mejorar y ejecutarlas en cierto tiempo para poder aplicarlas lo suficientemente bien, la realidad es que una computadora con todas sus capacidades si fuese capaz de realizar las mismas tareas o reconocimientos que nosotros lo haría muchísimo mejor. 

Así la Inteligencia artificial demuestra como al menos en el área de resolución de problemas particulares es extremadamente útil y nos brinda de una herramienta a la que antes no teníamos acceso y que nos permitirá analizar cantidades masivas de datos Y en problemas que quizás nosotros no hemos notado pero que a lo largo del tiempo puedan surgir o que ya han surgido y nosotros aún no somos capaces de darle una solución con la que podamos estar satisfechos.
