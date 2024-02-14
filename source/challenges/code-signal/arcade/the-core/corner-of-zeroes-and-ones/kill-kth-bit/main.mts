/*\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

AUTHOR: Noltron000
LICENSE: 3-Clause BSD (Attribution Required)
GITHUB: https://github.com/noltron000/coding-challenges/
CODESIGNAL: https://app.codesignal.com/profile/noltron000/

------------------------------------------------------------

Like my solutions? You can help me out in a couple of ways:
- Star my GitHub Repository & follow me on GitHub ⭐
- Upvote my solution on CodeSignal & become my CodeFriend 😄

/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\*/

/**
Kills the *k*-th bit of an integer by flipping it to zero.
If the *k*-th bit is already zero, this does nothing.

@param n
The number to convert into binary.
The result might be this *n*, or it might be one-bit off!

@param k
The *k*-th bit from the right gets operated upon.
If its one, it gets flipped to zero.
**/
const killKthBit = (input: number, kthBit: number) => {
	// The bitwise shift left, "<<", appends a series
	//	of zeroes to the binary version of a number.
	// Here, we're essentially using it to slap on
	//	"k-1" zeroes after a lone value of one.
	const kthPower = 1 << kthBit - 1
	// Since this is binary, every additinal zero
	//	will represent some power of two.

	// Notice how this bitwise operation
	//	is also equal to "2 ** (k - 1)".
	console.debug({
		bitwiseShift: (1 << (kthBit - 1)).toString(2),
		twoPower: (2 ** (kthBit - 1)).toString(2),
	})

	// Next, we'll have to flip all the bits in the number.
	// All zeroes must become ones, and vice-versa.
	console.debug({
		bitwiseNot: (~kthPower).toString(2),
		alternative: (-kthPower - 1).toString(2)
	})

	// OK, so this above result seems a little strange.
	// Isn't it supposed to just flip the bits?
	// Well....it turns out, it IS flipped after all!
	// The negative-sign just obfuscates this.
	// To deobfuscate it, apply an unsigned shift of zero.
	console.debug({
		unsignedBits: (~kthPower >>> 0).toString(2)
	})

	// Now we can use the bitwise and operator, "&",
	//	to filter out the "kth" digit of our given input.
	// Notice how the "kth" digit of "kthPower" is one,
	//	and all other digits in "kthPower" are zero.
	return input & ~kthPower

	/*
	TRUTH TABLE FOR (A & ~B)
	╭───┬───┬──────────────╮
	│ A │ B │ Result       │
	┝━━━┿━━━┿━━━━━━━━━━━━━━┥
	│ 0 │ 0 │ 0            │
	│ 1 │ 0 │ 1            │
	│ 0 │ 1 │ 0            │
	│ 1 │ 1 │ 0            │
	╰───┴───┴──────────────╯
	*/
}

export default killKthBit
