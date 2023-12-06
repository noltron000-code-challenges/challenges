const seperateConsecutiveChars = (string: string) => {
	let charGroups: Array<string> = [ ]

	string.split("").forEach((char) => {
		if (charGroups.at(-1)?.at(0) === char) {
			charGroups[charGroups.length - 1] += (char)
		}
		else {
			charGroups.push(char)
		}
	})

	return charGroups
}

const encodeCharGroup = (charGroup: string) => {
	const char = charGroup.at(0)
	const count = charGroup.length
	if (count > 1) return `${count}${char}`
	else return char
}

const encodeLine = (string: string) => {
	const charGroups = seperateConsecutiveChars(string)
	return charGroups.map((group) => encodeCharGroup(group)).join("")
}

export default encodeLine
