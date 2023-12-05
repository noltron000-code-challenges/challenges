# Challenge
Given the positions of a white `bishop` and a black `pawn` on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

# Example
![A bishop on a chess board](./bishop-01.jpg)

- For `bishop = "a1"` and `pawn = "c3"`, the output should be `solution(bishop, pawn) = true`.

	![A bishop that can attack a pawn](./bishop-02.jpg)

- For `bishop = "h1"` and `pawn = "h3"`, the output should be `solution(bishop, pawn) = false`.

	![A bishop that cannot attack a pawn](./bishop-03.jpg)
