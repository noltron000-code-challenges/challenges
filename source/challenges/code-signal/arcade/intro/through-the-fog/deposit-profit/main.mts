const countYearsOfInterestToThreshold = (
	deposit: number,
	rate: number,
	threshold: number,
) => {
	let years = 0
	while (deposit < threshold) {
		years += 1
		deposit *= 1 + rate / 100
	}
	return years
}

export default countYearsOfInterestToThreshold
