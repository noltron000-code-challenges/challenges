const findArrayMaximalAdjacentDifference = (inputArray: Array<number>) => {
	const deltas: Array<number> = [ ]

	for (let i = 1; i < inputArray.length; i++) {
		const delta = Math.abs(inputArray[i - 1] - inputArray[i])
		deltas.push(delta)
	}

	return Math.max(...deltas)
}

export default findArrayMaximalAdjacentDifference
