const renameDuplicates = (names: Array<string>) => {
	for (let index = 0; index < names.length; index++) {
		const upto = names.slice(0, index)
		const name = names.at(index)

		if (name != null && upto.includes(name)) {
			let ordinal = 1
			const getNewName = ( ) => `${name}(${ordinal})`

			while (upto.includes(getNewName( ))) ordinal ++
			names[index] = getNewName( )
		}
	}

	return names
}

const solution = renameDuplicates
export default renameDuplicates
