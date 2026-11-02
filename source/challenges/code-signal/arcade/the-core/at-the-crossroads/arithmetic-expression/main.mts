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
Checks if any basic arithmetic operator can be used
	on the given operands to give the provided result.
Note, `operand1` must be placed before `operand2`, so
	`operand2 - operand1 === result` is not acceptable.
**/
const isArithmeticExpression = (
	operand1: number,
	operand2: number,
	result: number,
) => (
	operand1 + operand2 === result
	|| operand1 - operand2 === result
	|| operand1 * operand2 === result
	|| operand1 / operand2 === result
)

export default isArithmeticExpression
