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
Given a decimal number, a bit, and an ordinal, determine
	the zero-based positional value of the nth-appearing bit,
	starting from the least-significant digit of the number.

@param input
The integer to scan through in binary.

@param targetBit
The bit to search for in binary.
Defaults to *0*.

@param targetOrdinal
The number of matching bits that must be found,
	before returning an index.
Defaults to *1*.

@returns
This method returns the zero-based
	index of the nth-matching bit.
If there is no such bit present,
	the method instead returns `null`.
**/
const getBitPlacement = (
	input: number,
	{
		targetBit = 0b0,
		targetOrdinal = 1,
	} = { },
) => {
	let iterator = input
	let bitOrdinal = 1
	let bitPosition = 0

	// Zero is an acceptable input value,
	//	but we only check for zero if it is the input.
	// Therefore, the first loop should always run!
	// (ie, use `do/while` instead of `while`)
	do {
		// Check if the first bit of `iterator`
		//	matches the value of `targetBit`.
		if ((iterator & 1) === targetBit) {
			// If this is also the nth-ordinal match, we can exit!
			if (bitOrdinal === targetOrdinal) return bitPosition
			else bitOrdinal++
		}

		iterator >>= 1 // Erase the last bit of the iterator.
		bitPosition++
	} while (iterator > 0)

	return null
}

export default getBitPlacement
