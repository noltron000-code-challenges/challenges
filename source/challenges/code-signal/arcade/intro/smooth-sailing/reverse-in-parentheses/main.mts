const reverseInParentheses = (string: string) => {
	while (true) {
		// Find the last open parenthesis
		//  occuring before any closing parethesis.
		// Obtain the indices of both.
		let openIndex: number | null = null
		let closeIndex: number | null = null

		console.log('---\n')

		for (const [index, character] of string.split("").entries( )) {
			if (character === "(") {
				openIndex = index
			}
			else if (character === ")") {
				closeIndex = index
				break
			}
		}

		// Break out if no matching parens are found.
		if (openIndex == null || closeIndex == null) {
			return string
		}

		// Otherwise, reverse the substring, and then update the main string.
		const capturedPhrase = string.slice(openIndex + 1, closeIndex)
		const reversedPhrase = capturedPhrase.split("").reverse( ).join("")

		const startString = string.slice(0, openIndex)
		const endString = string.slice(closeIndex + 1, string.length)

		string = startString + reversedPhrase + endString
	}
}

export default reverseInParentheses
