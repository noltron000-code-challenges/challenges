const areAllDigitsEven = (number: number) => {
	const result = number
	.toString( )
	.split("")
	.map((n) => {
		console.log(n)
		return parseInt(n)
	})
	.reduce((result, n) => {
		if (result === false) return false
		else return n % 2 === 0
	}, true)

	return result
}

export default areAllDigitsEven
