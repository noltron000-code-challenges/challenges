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

/** Determines whether a tennis set should be finished. */
const isTennisSetFinished = (
	score1: number,
	score2: number,
) => {
	// Set score1 to be the larger score
	//	(and score2 to be the smaller one).
	[score1, score2] = [score1, score2]
	.sort((a, b) => (a - b))

	if (score1 === score2) return false
	else if (score2 === 7 && score1 >= 5) return true
	else if (score2 === 6 && score1 < 5) return true
	else return false
}

export default isTennisSetFinished
