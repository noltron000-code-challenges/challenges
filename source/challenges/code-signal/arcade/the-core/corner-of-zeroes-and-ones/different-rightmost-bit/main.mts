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
Given two integers, this finds the first rightmost bit that
	differs between them, and returns its right-based index.
For example, compare `100100` to `10000000`.
In this example, the numer at position `2` from the right
	differs between the two given numbers.
**/
const getRightmostMismatchedBit = (
	a: number,
	b: number,
) => {
	// Note, "^" is a bitwise-xor operation.
	// 2 ^ 0 = 2 (10)
	// 2 ^ 1 = 3 (11)
	// 3 ^ 1 = 2 (10)
	const xor = a ^ b

	// Note, "&" is a bitwise-and operation.
	// This will give the index of the first matching number.
	return xor & -xor
}

/** This naive solution should be easier to read. **/
const getRightmostMismatchedBitNaive = (
	a: number,
	b: number,
) => {
	let n = a.toString(2)
	let m = b.toString(2)

	const maxLength = Math.max(n.length, m.length)
	const nz = "0".repeat(maxLength - n.length)
	const mz = "0".repeat(maxLength - m.length)

	n = nz + n
	m = mz + m

	n = n.split("").reverse( ).join("")
	m = m.split("").reverse( ).join("")

	for (var i = 0; i < n.length && i < m.length; i++) {
		if (n[i] === m[i]) continue
		else break
	}

	return 2 ** i
}

export default getRightmostMismatchedBit
