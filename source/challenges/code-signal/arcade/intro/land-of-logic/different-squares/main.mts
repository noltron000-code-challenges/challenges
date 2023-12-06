const countUniqueSquares = (matrix: Array<Array<number>>) => {
	let uniqueSquares = new Set( )

	const xLength = matrix.at(0)?.length ?? 0
	const yLength = matrix.length

	for (let xSeed = 1; xSeed < xLength; xSeed++) {
		for (let ySeed = 1; ySeed < yLength; ySeed++) {
			const square: Array<Array<number>> = [ ]
			for (let xIndex = xSeed - 1; xIndex < xSeed + 1; xIndex++) {
				const row: Array<number> = [ ]
				for (let yIndex = ySeed - 1; yIndex < ySeed + 1; yIndex++) {
					row.push(matrix[yIndex][xIndex])
				}
				square.push(row)
			}
			uniqueSquares.add(JSON.stringify(square))
		}
	}
	return uniqueSquares.size
}

export default countUniqueSquares
