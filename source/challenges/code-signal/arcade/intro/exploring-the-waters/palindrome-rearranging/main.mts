const makeHistogram = (inputString: string) => {
	const histogram: Record<string, number> = { }

	for (const character of inputString.split("")) {
		histogram[character] ??= 0
		histogram[character] +=1
	}

	return histogram
}

const checkSymmetry = (histogram: Record<string, number>) => {
	let tolerance = 1
	let oddCounts = 0

	for (const characterCount of Object.values(histogram)) {
		if (characterCount % 2 === 1) oddCounts += 1
		if (oddCounts > tolerance) return false
	}

	return true
}

const stringIsPalindromeAnagram = (inputString: string) => {
	const histogram = makeHistogram(inputString)
	return checkSymmetry(histogram)
}

export default stringIsPalindromeAnagram
