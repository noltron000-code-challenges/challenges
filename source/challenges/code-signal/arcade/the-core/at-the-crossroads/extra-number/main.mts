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
Given three numbers (two of which are matching),
	return the value of the odd number out.
If all three numbers are matching, then any one
	of the given numbers is the odd one out.

@param params
All three given numbers must have up to 32 bits.
**/
const getExtraNumber = (
	a: number,
	b: number,
	c: number,
) => (
	// Uses "^", the Bitwise XOR Operator.
	// This "zeroes-out" all matching bits of
	//	a single pair of equal numbers.
	// The third number is not modified by this,
	//	since 0 XOR *n* is *n* (if *n* < 32 bits).
	a ^ b ^ c
)

export default getExtraNumber
