// Generates all permutations efficiently.
// From https://stackoverflow.com/a/37580979
// See https://en.wikipedia.org/wiki/Heap%27s_algorithm
function * permute (array: Array<string>) {
	// Don't modify the original array!
	const permutation = [...array]
	yield [...permutation]

	// Create an array that tracks indices to compare.
	// The "c" stands for "comparison".
	const cArray = new Array(permutation.length).fill(0)

	// This index tracker will be the first point of comparison.
	let index01 = 1

	// You will see index02 appear later.
	// It is either 0, or a value from cArray.

	while (index01 < permutation.length) {
		if (cArray[index01] < index01) {
			// Get index02 from cArray.
			let index02 = 0
			if (index01 % 2 === 1) index02 = cArray[index01]

			// Swap the values at the two indices.
			const swapper = permutation[index01]
			permutation[index01] = permutation[index02]
			permutation[index02] = swapper

			// Yield the permutation!
			yield [...permutation]

			// Increase value in cArray and reset index01.
			cArray[index01] += 1
			index01 = 1
		}

		else {
			// Increase index01 and reset value in cArray.
			cArray[index01] = 0
			index01 += 1
		}
	}
}

// Assumes strings are of equal length
const isOffByOne = (word01: string, word02: string) => {
	let demerits = 0

	for (let index = 0; index < word01.length; index++) {
		if (word01[index] !== word02[index]) demerits += 1
	}

	// Is there exactly one difference in letters?
	return demerits === 1
}

const testRearrangements = (array: Array<string>) => {
	// Get every pair
	for (let index = 1; index < array.length; index++) {
		const value01 = array[index - 1]
		const value02 = array[index]
		if (!isOffByOne(value01, value02)) return false
	}
	return true
}

const canRearrangeStringsSlowly = (array: Array<string>) => {
	// Test every permutation until we find one that works.
	for (const permutation of permute(array)) {
		const result = testRearrangements(permutation)
		if (result) return result
	}
	// We found none that work, so it doesn't work.
	return false
}

export default canRearrangeStringsSlowly
