/*
This function checks whether a sequence is already in increasing order.
It has a tolerance parameter, which allows for one-off, two-off, or n-off sequences.
This could be modified to allow for decreasing sequences, if the input is reversed.
*/
const isSequenceAlmostSorted = (
	sequence: Array<number>,
	tolerance: number = 0,
) => {
	// Copy original array.
	sequence = [...sequence]

	let numRemoved = 0
	let currentMax = -Infinity
	let previousMax = -Infinity

	let index = 0
	while (index < sequence.length) {
		const element = sequence[index]

		if (element > currentMax) {
			// Test-Passing Case
			previousMax = currentMax
			currentMax = element
			index ++
		}

		else if (element > previousMax) {
			// Failure: previous element was an outlier (too large)
			numRemoved += 1
			currentMax = element
			sequence.splice(index - 1, 1)
		}

		else {
			// Failure: this element was an outlier (too small)
			numRemoved += 1
			sequence.splice(index, 1)
		}

		// Always make this check at the end of the loop.
		if (numRemoved > tolerance) return false
	}

	return true
}

export default isSequenceAlmostSorted
