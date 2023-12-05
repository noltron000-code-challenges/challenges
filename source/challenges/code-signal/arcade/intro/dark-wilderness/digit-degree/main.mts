const sumDigits = (n: number) => {
	return n
	.toString( )
	.split("")
	.map(digit => parseInt(digit))
	.reduce((sum, digit) => sum + digit)
}


const getDegreeOfDigit = (n: number) => {
	let counter = 0
	while (n.toString( ).length > 1) {
		n = sumDigits(n)
		counter += 1
	}
	return counter
}

export default getDegreeOfDigit
