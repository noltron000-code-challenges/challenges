const sortPeopleAmongstFoliage = (inputArray: Array<number>) => {
	// A piece of foliage always has a value of -1.
	const foliageFinder = (
		found: Array<number>,
		currentValue: number,
		currentIndex: number,
	) => {
		if (currentValue === -1) found.push(currentIndex)
		return found
	}

	const foliageIndices = inputArray
	.reduce(foliageFinder, [ ])

	const sortedPeople = inputArray
	.filter((height) => height !== -1)
	.sort((a, b) => a - b)

	// After sorting people from their height, we have to
	//	place them between the trees.
	// To do this, re-insert the foliage at the given indices.
	foliageIndices.forEach((index: number) => {
		sortedPeople.splice(index, 0, -1)
	})

	return sortedPeople
}

export default sortPeopleAmongstFoliage
