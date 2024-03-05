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
Counts all matching bits appearing in the range
	between given numbers `start` and `end`.

@param start
The first value in the range.

@param end
The final value in the range.

@param targetBit
The bit-value to count.
Defaults to *1*.
**/
const countBitsInRange = (
	start: number,
	end: number,
	targetBit = 1
) => {
	// Ensure that `start` < `end`.
	[start, end] = [start, end].sort((a, b) => (a - b))

	// Initialize tracker variables...
	let iterator = start
	let oneBitCounter = 0

	while (iterator <= end) {
		oneBitCounter += iterator
		.toString(2) // Convert to binary.
		.split('') // Spread into an array.
		.map((str) => parseInt(str))
		.filter((bit) => (bit === targetBit))
		.length // Count the matching bits!

		iterator++
	}

	// We have counted all the one-bits in the array.
	return oneBitCounter
}

export default countBitsInRange
