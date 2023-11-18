def josephus(n, k):
    soldados = list(range(1, n + 1))
    indice_soldado_actual = 0
    
    while len(soldados) > 1:
        # Calculamos el índice del soldado a eliminar
        indice_soldado_a_eliminar = (indice_soldado_actual + k - 1) % len(soldados)
        
        # Eliminamos al soldado
        soldados.pop(indice_soldado_a_eliminar)
        
        # Actualizamos el índice del soldado actual para el próximo ciclo
        indice_soldado_actual = indice_soldado_a_eliminar % len(soldados)
    
    return soldados[0]

n_soldados = 41
k_valor = 2
posicion_ganadora = josephus(n_soldados, k_valor)

print(f"Josephus debe sentarse en la posición {posicion_ganadora} para ser el último sobreviviente.")