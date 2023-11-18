const countNeededStatues = (statueSizes: Array<number>) => {
	const minSize = Math.min(...statueSizes)
	const maxSize = Math.max(...statueSizes)
	return maxSize - minSize - statueSizes.length + 1
}

export default countNeededStatues
