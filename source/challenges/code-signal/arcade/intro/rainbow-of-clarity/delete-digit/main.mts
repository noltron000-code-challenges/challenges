const findMaxAfterDeleteDigit = (n: number) => {
	const nString = n.toString( )
	let largest: number | null = null

	for (let index = 0; index < nString.length; index++) {
		const spliced = nString.split("")
		spliced.splice(index, 1)

		const current = parseInt(spliced.join(""))
		if (largest == null) largest = current
		else if (largest < current) largest = current
	}

	return largest
}

export default findMaxAfterDeleteDigit
