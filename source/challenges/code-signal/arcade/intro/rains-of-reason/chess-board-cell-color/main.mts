
const getPosFromString = (cellString: string): [number, number] => {
	let [col, row] = cellString.toLowerCase( ).split("")

	const x = col.charCodeAt(0) - "a".charCodeAt(0)
	const y = parseInt(row) - 1

	return [x, y]
}

const getColor = ([x, y]: [number, number]) => {
	return (x + y) % 2
}

const getChessBoardColor = (cellString01: string, cellString02: string) => {
	const cellCoords01 = getPosFromString(cellString01)
	const cellCoords02 = getPosFromString(cellString02)
	return getColor(cellCoords01) === getColor(cellCoords02)
}

export default getChessBoardColor
