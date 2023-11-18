const findHauntedRooms = (roomMatrix: Array<Array<number>>) => {
	let height = roomMatrix.length
	let width = roomMatrix[0].length

	// Initialize costMatrix
	const costMatrix = new Array(height).fill(null)
		.map((row) => new Array(width).fill(null))

	// Enter values now
	let h = 0
	let w = 0
	let cost = 0

	while (h < height) {
		while (w < width) {
			// Room was already checked for valid housing.
			if (costMatrix[h][w] != null) {/* skip */}

			// Room is valid housing, mark it.
			else if (roomMatrix[h][w] !== 0) {
				costMatrix[h][w] = roomMatrix[h][w]
				cost += costMatrix[h][w]
			}

			// Room can't be used -- its haunted!
			else {
				// Mark this cell, and ones below it.
				let below = 0
				while (h + below < height) {
					costMatrix[h + below][w] = 0
					below ++
				}
			}

			// Increment width iterator
			w ++
		}

		// Increment height & reset width
		w = 0
		h ++
	}

	// Reset height iterator
	h = 0

	return cost
}

export default findHauntedRooms
