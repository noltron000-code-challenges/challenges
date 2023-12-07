const getMessageFromBinary = (messageCode: string) => {
	let message = ""
	for (let startIndex = 0; startIndex <= messageCode.length - 8; startIndex += 8) {
		const endIndex = startIndex + 8
		const binaryCode = messageCode.slice(startIndex, endIndex)
		const characterCode = parseInt(binaryCode, 2)
		const character = String.fromCharCode(characterCode)
		message += character
	}
	return message
}

export default getMessageFromBinary
