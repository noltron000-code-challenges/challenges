const findShapeArea = (n: number) => {
	let totalArea = 1
	let iterator = 0

	while (iterator < n) {
		totalArea += iterator * 4
		iterator += 1
	}

	return totalArea
}

export default findShapeArea
