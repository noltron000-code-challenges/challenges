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
A packed array is an array of numbers whose contents are&hellip;
1. reversed
2. converted to binary numbers
3. joined together
4. converted into a single decimal number

Assume that each value is between 0 and 255 (or 8 bits).
**/
const getPackedArray = (numbers: Array<number>) => (
	numbers.reduce((packedArray, number, index) => (
		// Push this number another 8 bits "away" from the last number.
		// This way, the numbers are never lost and can be converted back.
		packedArray + (number << 8 * index)
	))
)

export default getPackedArray
