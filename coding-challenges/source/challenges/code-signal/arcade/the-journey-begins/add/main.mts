const add = (p1: number, p2: number) => p1 + p2

const getSum = (...params: Array<number>) => {
	return params.reduce(add, 0)
}

export default getSum
