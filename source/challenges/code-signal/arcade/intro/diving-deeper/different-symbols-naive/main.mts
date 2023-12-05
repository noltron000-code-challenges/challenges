const countDistinctCharacters = (s: string) => {
	const characters = new Set( )
	s.split("").forEach((char) => {
		characters.add(char)
	})
	return [...characters].length
}

export default countDistinctCharacters
