function * generateIndices (k: number) {
	// subtract one to make it zero-indexed.
	let index = k - 1
	yield index

	while (true) {
		index += k
		yield index
	}
}

const getElementsAtModulo = (inputArray: Array<number>, k: number) => {
	const outputArray = [...inputArray]

	// Get all skipped indices in ascending order.
	const skippedIndices: Array<number> = [ ]
	for (const index of generateIndices(k)) {
		if (index >= inputArray.length) break
		skippedIndices.push(index)
	}

	// In descending order, remove items at each index.
	while (skippedIndices.length > 0) {
		const index = skippedIndices.pop( )
		if (index == null) break
		outputArray.splice(index, 1)
	}

	return outputArray
}

export default getElementsAtModulo
