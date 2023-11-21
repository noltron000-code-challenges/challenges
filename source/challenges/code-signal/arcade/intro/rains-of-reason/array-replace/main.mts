const getSubstitutedArray = <Element = unknown, Substitute = Element> (
	inputArray: Array<Element>,
	elemToReplace: Element,
	substitutionElem: Substitute,
) => {
	const outputArray = inputArray.map((e) => {
		if (e === elemToReplace) return substitutionElem
		else return e
	})
	return outputArray
}

export default getSubstitutedArray
