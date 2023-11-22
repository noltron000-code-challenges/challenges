const isVariableValid = (name: string) => {
	if (name.at(0)?.match(/^\d$/)) return false
	else if (name.match(/^\w+$/)) return true
	else return false
}

export default isVariableValid
