def print_diamond(rows):
    # Upper half of the diamond
    for i in range(1, rows + 1):
        print(" " * (rows - i) + "* " * i)

    # Lower half of the diamond
    for i in range(rows - 1, 0, -1):
        print(" " * (rows - i) + "* " * i)

# Example usage:
rows = 5  # You can adjust the number of rows here
print_diamond(rows)
