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

/** Mirrors the bits of the input and returns the result. */
const getMirroredBits = (input: number) => {
	let iterator = input
	let result = 0

	while (iterator > 0) {
		// Push current binary "forward" by one binary place.
		// For example, 0b10 --> 0b100.
		result <<= 1

		// Here, `iterator & 1` becomes 0 or 1,
		//	depending on the first binary digit of `iterator`.
		// This erases all but the least significant digit.
		const firstDigit = iterator & 1

		// Note, "+=" could also be used here.
		result |= firstDigit

		// Pushes our iterator "backward" by one binary place.
		// It might just delete the least significant digit!
		// For example, 0b101 --> 0b10.
		iterator >>= 1
	}

	return result
}

export default getMirroredBits
