// From an earlier solution: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
const isPalindrome = (string: string) => (
	string.split('').reverse( ).join('') === string
)

const buildPalindrome = (string: string) => {
	let additions = string.split('').reverse( ).join('').slice(1)
	let shortestAdditions = additions

	while (true) {
		const potentialPalindrome = string + additions
		if (isPalindrome(potentialPalindrome)) {
			shortestAdditions = additions
		}

		if (additions.length === 0) break
		else additions = additions.substring(1)
	}

	const palindrome = string + shortestAdditions
	return palindrome
}

export default buildPalindrome
