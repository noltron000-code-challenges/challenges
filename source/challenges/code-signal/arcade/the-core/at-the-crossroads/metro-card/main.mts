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

/** Counts the number of days in a month. */
const daysInMonth = (month: number) => (
	new Date(0, month, 0).getDate( )
)

/**
Given the number of days in the previous month,
	this function finds which months could be this month.
**/
const findPossibleMonths = (lastNumDays: number) => {
	// Create an array representing
	//	the number of days in a given month.
	const daysPerMonth = new Array(12)
	.fill(null)
	.map((_, monthIndex) => {
		const month = monthIndex + 1
		return daysInMonth(month)
	})

	const result = new Set( )
	// Obtain the possible number of days in this month.
	daysPerMonth.forEach((numDays, monthIndex) => {
		if (numDays === lastNumDays) {
			// Use modolo so we don't reach month 13 (impossible).
			result.add(daysPerMonth.at((monthIndex + 1) % 12))
		}
	})

	return [...result]
}

export default findPossibleMonths
