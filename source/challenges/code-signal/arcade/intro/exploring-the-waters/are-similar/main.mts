const createHistogram = <T = unknown,> (
	array: Array<T>,
) => {
	const histogram: Record<string, number> = { }

	array.forEach((value) => {
		const key = JSON.stringify(value)
		histogram[key] ??= 0
		histogram[key] += 1
	})

	return histogram
}

const frequenciesAreMatching = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	const aHisto = createHistogram(a)
	const bHisto = createHistogram(b)

	for (const [key, aCount] of Object.entries(aHisto)) {
		const bCount = bHisto[key]
		if (aCount === bCount) continue
		else return false
	}

	return true
}

const positionsAreMatching = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	let mismatches = 0
	let tolerance = 1

	for (let index = 0; index < a.length; index++) {
		if (a[index] !== b[index]) mismatches += 1
	}

	return !(mismatches / 2 > tolerance)
}

const arraysAreSimilar = <T = unknown,> (
	a: Array<T>,
	b: Array<T>,
) => {
	if (!frequenciesAreMatching(a, b)) return false
	else if (!positionsAreMatching(a, b)) return false
	else return true
}

export default arraysAreSimilar
