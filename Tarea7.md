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