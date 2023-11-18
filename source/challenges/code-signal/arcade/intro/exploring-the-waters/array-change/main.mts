const countNeededAdditions = (inputArray) => {
	const outputArray = [...inputArray]

	let index = 1
	let moves = 0

	while (index < outputArray.length) {
		const lastValue = outputArray[index - 1]
		const thisValue = outputArray[index]

		if (thisValue > lastValue) {
			index++
		}

		else {
			moves++
			outputArray[index]++
		}
	}

	return moves
}

export default countNeededAdditions
