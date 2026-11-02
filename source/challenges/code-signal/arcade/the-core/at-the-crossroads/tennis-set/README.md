# Challenge
In tennis, the winner of a set is based on how many games each player wins.
The first player to win 6 games is declared the winner, **unless** their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

Given integers representing the current scores of two players, your task is to determine if the tennis set should be finished.

# Example
- Given scores of *3-6*, the output should be **`true`**.

	Since the first player hadn't reached 5 wins, the set ends once the second player has won 6 games.

- Given scores of *8-5*, the output should be **`false`**.

	Since both players won at least 5 games, the set would've ended once one of them won the 7th one.

- Given scores of *6-5*, the output should be **`false`**.

	This set will continue until one of these players wins their 7th game, so this can't be the final score.
