# Challenge
You're given an arbitrary 32-bit integer.
Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair.
Then return the result as a decimal number.

# Example
- For *13*, the output should be **14**.
	1310 = 11012 ~> {11}{01}2 ~> 11102 = 1410.

- For *74*, the output should be **133**.

	`74 = 0b010010102 ~> {01}{00}{10}{10} ~> 0b10000101 = 13310`.

	Note the preceding zero written in front of the initial binary number: since both numbers are 32-bit integers, they have 32 bits in their binary representation.
	The preceding zeros in other cases don't matter, so they are omitted.
	Here, however, it does make a difference.
