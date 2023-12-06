function * generateHeights (upSpeed: number, downSpeed: number) {
	let height = 0
	let days = 0
	yield {height, days}

	while (true) {
		days += 1
		height += upSpeed
		yield {height, days}
		height -= downSpeed
	}
}

const countDaysOfGrowth = (upSpeed: number, downSpeed: number, desiredHeight: number) => {
	for (const {height, days} of generateHeights(upSpeed, downSpeed)) {
		if (height >= desiredHeight) return days
	}
}

export default countDaysOfGrowth
