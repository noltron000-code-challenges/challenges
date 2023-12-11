const getLongestDigitPrefix = (inputString: string) => {
	return inputString.match(/^\d+/g)?.at(0) ?? ""
}

export default getLongestDigitPrefix
