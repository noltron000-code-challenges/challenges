const solution = (number: number) => {
	const spiral = new Array(number).fill(null)
	.map(_ => new Array(number).fill(null))


	let rowIndex = 0
	let colIndex = 0
	let rowDelta = 0
	let colDelta = 1 // start by moving east

	let northBound = 0
	let eastBound = 0
	let southBound = 0
	let westBound = 0

	let ordinal  = 1
	while (ordinal <= number ** 2) {

		spiral[rowIndex][colIndex] = ordinal
		ordinal++

		const newRowIndex = rowIndex + rowDelta
		const newColIndex = colIndex + colDelta

		// console.log({rowIndex, colIndex, newRowIndex, newColIndex})
		if (newColIndex >= number - eastBound) {
			// We hit an east wall.
			// That means a north row is filled.
			northBound += 1
			// We must start heading south now.
			rowDelta = 1
			colDelta = 0
		}
		else if (newRowIndex >= number - southBound) {
			// We hit a south wall.
			// That means a east column is filled.
			eastBound += 1
			// We must start heading west now.
			rowDelta = 0
			colDelta = -1
		}
		else if (newColIndex < 0 + westBound) {
			// We hit a west wall.
			// That means a south row is filled.
			southBound += 1
			// We must start heading north now.
			rowDelta = -1
			colDelta = 0
		}
		else if (newRowIndex < 0 + northBound) {
			// We hit a north wall.
			// That means a west column is filled.
			westBound += 1
			// We must start heading east now.
			rowDelta = 0
			colDelta = 1
		}
		rowIndex += rowDelta
		colIndex += colDelta
	}
	return spiral
}
