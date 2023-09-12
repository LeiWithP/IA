# Estrategia
- La maquina dara prioridad a los espacios que abarquen mas dimensiones, buscando jugar en ellos siempre que pueda y saltando al siguiente niveld e prioridad en caso de estar todos los espacios de un tipo ocupados, teniando esta prioridad:
1. Centro del Cubo
2. Esquinas
3. Aristas
4. Centro de Cara
- Ademas la maquina buscara formar lineas, cuando no tenga bloqueado si movimiento para evitar que el contrincante gane, jugando lo mas cerca posible de las jugadas enemigas para bloquear posibles intentos de ganar
- Cada vez que juegue la maquina esta ignorara, como posibles amenazas, las posibles filas con las que intersecte sus jugadas pues estas ya no podran ser lineas ganadoras para el enemigo