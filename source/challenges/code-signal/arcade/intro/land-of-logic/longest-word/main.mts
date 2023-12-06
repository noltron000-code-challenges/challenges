const getLongestWord = (text: string) => {
	const result = [...text.matchAll(/\b[a-z,A-Z]+?\b/g)]
	.map(res => res.at(0) ?? '')
	.reduce((bestWord, currentWord) => {
		if (bestWord.length < currentWord.length) return currentWord
		else return bestWord
	})
	return result
}

export default getLongestWord
