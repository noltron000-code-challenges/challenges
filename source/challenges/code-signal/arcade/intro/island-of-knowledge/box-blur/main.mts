const getBoxBlur = (image: Array<Array<number>>) => {
	const rowLength = image.at(0)?.length ?? 0
	const columnHeight = image.length

	const blurredImage = new Array(columnHeight - 2).fill(null)
	.map(row => new Array(rowLength - 2).fill(null))

	for (let row = 1; row < columnHeight - 1; row ++) {
		const blurredRow = row - 1

		for (let col = 1; col < rowLength - 1; col ++) {
			const blurredCol = col - 1

			let blurValue = 0
			for (let rowMod = -1; rowMod < 2; rowMod ++) {
				const adjRow = row + rowMod

				for (let colMod = -1; colMod < 2; colMod ++) {
					const adjCol = col + colMod
					blurValue += image[adjRow][adjCol]
				}
			}

			blurValue /= 9

			blurredImage[blurredRow][blurredCol] = Math.trunc(blurValue)
		}
	}

	return blurredImage
}

export default getBoxBlur
