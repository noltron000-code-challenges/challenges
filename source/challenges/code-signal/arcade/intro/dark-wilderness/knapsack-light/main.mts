const solution = (
	value1: number,
	weight1: number,
	value2: number,
	weight2: number,
	maxWeight: number,
) => {
	const item1 = {value: value1, weight: weight1}
	const item2 = {value: value2, weight: weight2}
	const combined = {
		value: value1 + value2,
		weight: weight1 + weight2,
	}

	return Math.max(
		item1.weight <= maxWeight ? item1.value : 0,
		item2.weight <= maxWeight ? item2.value : 0,
		combined.weight <= maxWeight ? combined.value : 0,
		0
	)
}

const naiveSolution = (
	value1: number,
	weight1: number,
	value2: number,
	weight2: number,
	maxWeight: number,
) => {
	const item1 = {value: value1, weight: weight1}
	const item2 = {value: value2, weight: weight2}

	if (item1.weight + item2.weight <= maxWeight) {
		return item1.value + item2.value
	}

	else if (item1.weight > maxWeight && item2.weight > maxWeight) {
		return 0
	}

	else if (item1.weight > maxWeight) {
		return item2.value
	}

	else if (item2.weight > maxWeight) {
		return item1.value
	}

	else if (item1.value > item2.value) {
		return item1.value
	}

	else {
		return item2.value
	}
}

export default solution
