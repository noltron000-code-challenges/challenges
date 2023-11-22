const getShiftedString = (inputString: string) => {
	return inputString
	.split("")
	.map(char => {
		if (char === "z") return "a"
		else return String.fromCharCode(char.charCodeAt(0) + 1)
	})
	.join("")
}

export default getShiftedString
