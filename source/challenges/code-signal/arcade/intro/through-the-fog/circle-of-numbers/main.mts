const getRadialOpposite = (modulo: number, number: number) => {
	if (modulo % 2 !== 0) throw new Error('Input is not an even number.')
	return (number + modulo / 2) % number
}

export default getRadialOpposite
