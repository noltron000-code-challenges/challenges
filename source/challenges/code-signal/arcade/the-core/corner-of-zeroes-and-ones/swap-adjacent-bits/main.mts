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
In mathematics, parity is the fact
	of a number being even or odd.
*/
type parity = 'odd' | 'even'

/**
As it says on the tin: swaps the adjacent bits of a number.
This assumes there as few bits as possible are used to
	store the number, so if you know you have a 32-bit number,
	just put 32 as the second parameter of the function call.
**/
const swapAdjacentBits = (
	number: number,
	bits?: number,
) => {
	// We don't have to assume that the number is 32-bit.
	// Instead, we can assume that it is n-bit by default
	//	(where n is the length of the binary number).
	if (bits == null) {
		// We will have to make it an even number of bits,
		//	since we may need to count a single leading zero.
		// Can't swap digits if it has no partner to swap with.
		// For example, consider 0b100 vs 0b0100..
		bits = Math.ceil(number.toString(2).length / 2)
	}

	const odds = addStaggeredPowersOfTwo(bits, 'odd')
	const evens = addStaggeredPowersOfTwo(bits, 'even')

	// This makes puts all odd-positioned bits even-positioned
	//	(by pushing their binary place forward by one),
	//	and all even-positioned bits odd-positioned
	//	(by pushing their binary place backward by one).
	// Notice how `|` can be freely replaced with `+` here.
	return ((number & odds) << 1) | ((number & evens) >> 1)
}

/** Returns numbers like `0b1010101` and `0b1010`. */
const addStaggeredPowersOfTwo = (
	bits: number,
	parity: parity,
) => {
	let power = 0
	let total = 0

	// If the parity is even, the binary
	//	 representation will end with a 0.
	if (parity === 'even') power += 1

	// Sum the every second power of two.
	while (power < bits) {
		total += 2 ** power
		power += 2
	}

	return total
}

export default swapAdjacentBits
