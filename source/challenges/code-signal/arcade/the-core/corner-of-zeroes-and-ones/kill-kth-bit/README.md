# Challenge
In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions.
The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation.
More specifically, in the given number *n*, the *k<sup>th</sup>* bit from the right was initially set to 0, but its current value might be different.
It's now up to you to write a function that will change the *k<sup>th</sup>* bit of *n* back to 0.

# Example
- For *n = 37* and *k = 3*, the output should be **33**.

	~~~ts
	// Converting 37 into binary...
	37 === 0b100101

	/*
	Removing Kth Digit... (k = 3)

	0b100101
	     ↓
	0b100001
	*/

	// Converting back into base-10...
	0b100001 === 33
	~~~

- For *n = 37* and *k = 4*, the output should be **37**.

	The 4<sup>th</sup> bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still **37**.
