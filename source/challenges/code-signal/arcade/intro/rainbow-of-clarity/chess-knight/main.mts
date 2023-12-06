type Coordinates = [number, number]
const GRID_LENGTH = 8

const getPosFromString = (cellString: string): Coordinates => {
	const [col, row] = cellString.toLowerCase( ).split("")

	const x = col.charCodeAt(0) - "a".charCodeAt(0)
	const y = parseInt(row) - 1

	return [x, y]
}

const getKnightMoves = (string: string) => {
	const pos = getPosFromString(string)
	const vectorDirection = [1, -1]
	const vectorMagnitude = [1, 2]

	const vectorCombos: Array<number> = [ ]

	vectorDirection.forEach((dir) => {
		vectorMagnitude.forEach(mag => {
			vectorCombos.push(dir * mag)
		})
	})

	const moveCombos: Array<Coordinates> = [ ]

	vectorCombos.forEach((xMove) => {
		vectorCombos.forEach((yMove) => {
			if (Math.abs(xMove) === Math.abs(yMove)) return // continue
			moveCombos.push([xMove, yMove])
		})
	})

	const validMoveCombos = moveCombos
	.map((delta): Coordinates => {
    const x = pos[0] + delta[0]
		return [x, pos[1] + delta[1]]
	})
	.filter((newPos) => {
		if (newPos[0] < 0) return false
		if (newPos[1] < 0) return false
		if (newPos[0] >= GRID_LENGTH) return false
		if (newPos[1] >= GRID_LENGTH) return false
		return true
	})

	return validMoveCombos
}


const solution = (s: string) => getKnightMoves(s).length
export default solution
