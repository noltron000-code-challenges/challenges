const findMaxAdjacentProduct  = (...params: Array<number>) => {
	let maxAdjacentProduct: number | null = null

	for (let index = 0; index < params.length - 1; index++) {
		const p1 = params[index]
		const p2 = params[index + 1]
		const adjacentProduct = p1 * p2

		if (maxAdjacentProduct == null) maxAdjacentProduct = adjacentProduct
		else maxAdjacentProduct = Math.max(maxAdjacentProduct, adjacentProduct)
	}

	return maxAdjacentProduct
}
