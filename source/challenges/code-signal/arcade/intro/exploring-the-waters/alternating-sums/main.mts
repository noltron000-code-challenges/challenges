const sum = (a: number, b: number) => a + b

const alternateSum = (weights: Array<number>) => {
	const teams: [Array<number>, Array<number>] = [[ ], [ ]]

	weights.forEach((member, index) => {
		const team = index % 2
		teams[team].push(member)
	})

	const teamWeights: [number, number] = [0, 0]
	teams.forEach((team, teamIndex) => {
		teamWeights[teamIndex] = team.reduce(sum, 0)
	})

	return teamWeights
}

export default alternateSum
