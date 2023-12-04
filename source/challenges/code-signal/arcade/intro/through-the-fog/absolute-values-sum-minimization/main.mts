const getAbsoluteSumAtIndex = (
	array: Array<number>,
	value: number,
) => {
	return array
	.map((arrayValue) => Math.abs(arrayValue - value))
	.reduce((a, b) => a + b)
}

const getMinimumAbsoluteSum = (array: Array<number>) => {
	let bestValue: number | null = null
	let bestSum: number | null = null

	array.forEach((value) => {
		const sum = getAbsoluteSumAtIndex(array, value)

		// Initial case
		if (bestValue == null || bestSum == null) {
			bestValue = value
			bestSum = sum
		}

		// Superior case
		else if (bestSum > sum) {
			bestValue = value
			bestSum = sum
		}
	})

	return bestValue
}

export default getMinimumAbsoluteSum
