const factorial = (n: number) => {
	let product = 1
	while (n > 0) product *= n--
	return product
}

const multiply = (a: number, b: number) => a * b

const transpose = <T = unknown,> (grid: Array<Array<T>>) => {
	const rowLength= grid.length
	const columnLength = grid.at(0)?.length ?? 0

	const transposed: Array<Array<T>> = new Array(columnLength).fill(null)
	.map(row => new Array(rowLength).fill(null))

	grid.forEach((row, rowIndex) => {
		row.forEach((cell, columnIndex) => {
			transposed[columnIndex][rowIndex] = grid[rowIndex][columnIndex]
		})
	})

	return transposed
}

const solution = (grid: Array<Array<number>>) => {
	const cols = transpose(grid)

	const sqrs: Array<Array<number>> = [ ]
	for (let squareIndex = 0; squareIndex < grid.length; squareIndex += 3) {
		const sqr: Array<number> = [ ]
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				sqr.push(grid[squareIndex + i][squareIndex + j])
			}
		}
		sqrs.push(sqr)
	}


	const product = factorial(9)
	const rowsOK = grid.every(row => row.reduce(multiply) === product)
	const colsOK = cols.every(col => col.reduce(multiply) === product)
	const sqrsOK = sqrs.every(sqr => sqr.reduce(multiply) === product)

	return rowsOK && colsOK && sqrsOK
}
