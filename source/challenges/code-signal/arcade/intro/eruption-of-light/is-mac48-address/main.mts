const isHex = (string: string) => {
	const result = string.match(/^[\dA-Fa-f]{2}$/)
	return result != null
}

const isMAC48 = (string: string) => {
	const groups = string.split("-")
	if (groups.length !== 6) return false
	for (const group of groups) {
		if (group.length !== 2) return false
		if (isHex(group) === false) return false
	}
	return true
}

export default isMAC48
