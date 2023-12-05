const getFirstDigit = (inputString: string) => {
	for (let char of inputString.split("")) {
		if (char.match(/\d/)) return char
	}
	return null
}

export default getFirstDigit
