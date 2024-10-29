# Challenge
You're given two integers, *n* and *m*.
Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the 0-based position.

# Example
- Given *n = 11* and *m = 13*, the output should be **1**.
	- `11 = 0b1011`
	- `13 = 0b1101`

	The rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
	So the answer is 1.

- For an *n = 7* and an *m = 23*, the output should be **4**.
	- `7 = 0b111`
	- `23 = 0b10111`

	*ie:*

	~~~ts
	00111
	10111
	~~~

	So, the answer is 4.
