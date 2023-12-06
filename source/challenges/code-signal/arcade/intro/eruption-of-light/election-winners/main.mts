const countCompetetiveCandidates = (
	currentVotes: Array<number>,
	remainingVotes: number,
) => {
	const mostVotes = Math.max(...currentVotes)

	const numLeading = currentVotes
	.filter((numVotes) => (
		numVotes === mostVotes
	))
	.length

	const hasTie = numLeading > 1

	let numCompetitors = 0
	currentVotes.forEach((numVotes) => {
		if (numVotes + remainingVotes > mostVotes) numCompetitors += 1
		else if (!hasTie && numVotes === mostVotes) numCompetitors += 1
	})

	return numCompetitors
}

export default countCompetetiveCandidates
