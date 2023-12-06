const isBeautifulString = (inputString: string) => {
	const histogram = inputString
	.split("")
	.reduce((hist, letter) => {
		hist[letter] ??= 0
		hist[letter] += 1

		return hist
	}, { })

	return inputString
	.split("")
	.reduce((result, letter) => {
		if (result === false) return false
		if (letter === "a") return true
		const previous = String.fromCharCode(letter.charCodeAt(0) - 1)
		if (histogram[previous] == null) return false
		if (histogram[letter] > histogram[previous]) return false
		return true
	}, true)
}

export default isBeautifulString
