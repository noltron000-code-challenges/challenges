const parseShoppingString = (inputString: string) => {
	let count = 0
	const foundNumbers = [...inputString.matchAll(/\d+/g)]
	foundNumbers.forEach((numberString) => {
		count += parseFloat(numberString.toString( ))
	})
	return count
}

export default parseShoppingString
