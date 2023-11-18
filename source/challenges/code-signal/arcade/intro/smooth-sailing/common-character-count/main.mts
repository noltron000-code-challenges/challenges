const makeGlyphDictionary = (string: string) => {
	const reducer = (
		dict: Record<string, number>,
		glyph: string
	) => {
		if (dict[glyph] == null) dict[glyph] = 0
		dict[glyph] += 1
		return dict
	}

	return string.split("").reduce(reducer, { })
}

const countCommonCharacters = (string1: string, string2: string) => {
	const dict1 = makeGlyphDictionary(string1)
	const dict2 = makeGlyphDictionary(string2)
	const sharedDict: Record<string, number> = { }

	Object.entries(dict1).forEach(([key, value1]) => {
		const value2 = dict2[key] ?? 0
		sharedDict[key] = Math.min(value1, value2)
	})

	const reducer = (total: number, value: number) => total + value
	const totalSharedGlyphs = Object.values(sharedDict).reduce(reducer, 0)
	return totalSharedGlyphs
}

export default countCommonCharacters
