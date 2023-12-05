const findMaximumSumOfSlice = (array: Array<number>, k: number) => {
	let largestSum = -Infinity
	for (let initialIndex = 0; initialIndex < array.length - k + 1; initialIndex++) {
		let sum = 0
		for (let index = initialIndex; index < initialIndex + k; index++) {
			sum += array[index]
		}

		if (sum > largestSum) largestSum = sum
	}
	return largestSum
}

export default findMaximumSumOfSlice
