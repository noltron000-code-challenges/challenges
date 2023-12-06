# Challenge
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it.
The complete move therefore looks like the letter L.
Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

![Knights can move in an L-shaped pattern.][knight-01]

# Example
- For `cell = "a1"`, the output should be `solution(cell) = 2`.

	![Knights cannot move much whilst positioned in a corner.][knight-02]

- For `cell = "c2"`, the output should be `solution(cell) = 6`.

	![Knights have an interesting move pattern overall.][knight-03]

[knight-01]: ./knight-01.jpg
[knight-02]: ./knight-02.jpg
[knight-03]: ./knight-03.jpg
