const findLongestStrings = (strings: Array<string>) => {
	const lengths = strings.map((str) => str.length)
	const maxLength = Math.max(...lengths)
	return strings.filter((str) => str.length === maxLength)
}

export default findLongestStrings
