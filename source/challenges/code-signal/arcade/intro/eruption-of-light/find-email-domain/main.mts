const getEmailDomain = (address) => {
	const domain = address.match(/@[\w\d\-\.]+?$/).at(0).slice(1)
	return domain
}

export default getEmailDomain
