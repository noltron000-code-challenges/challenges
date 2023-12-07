// Generates all prime numbers.
function * generatePrimeNumbers ( ) {
	yield 2
	yield 3

	let multiplier = 1
	while (true) {
		yield multiplier * 6 - 1
		yield multiplier * 6 + 1
		multiplier += 1
	}

	// Noop
	return NaN
}

// Finds the prime factors of a given number.
const findPrimeFactors = (number: number) => {
	const primeNumberGenerator = generatePrimeNumbers( )
	let primeNumber = primeNumberGenerator.next( ).value
	const primeFactors: Array<number> = [ ]

	while (number > 1) {
		if (number % primeNumber === 0) {
			primeFactors.push(primeNumber)
			number = Math.trunc(number / primeNumber)
		}
		else {
			primeNumber = primeNumberGenerator.next( ).value
		}
	}

	return primeFactors
}

/*
First thing we need to do, is deconstruct the given product integer into its prime factors.
This will allow us to re-multiply them into integers less than 10, if that is at all possible.
Consider that an integer like 11 can't be made to fit in one digit, unless we used a base-12 system or something.

5's and 7's can't be multiplied without making some n > 9.
So, what's important is how to frame leftover 2's and 3's.

With two leftover minor primes:
3 3 => 9
3 2 => 6
2 2 => 4

With three leftover minor primes:
3 3 3 => best is 39
3 3 2 => best is 29 (not 36) // (prefer 3 * 3 to 3 * 2)
3 2 2 => best is 26 (not 34) // (prefer 3 * 2 to 2 * 2)
2 2 2 => best is 8

With four leftover minor primes:
3 3 3 3 => best is 99
3 3 3 2 => best is 69
3 3 2 2 => best is 49 (not 66) // (prefer 3 * 3 to 3 * 2)
3 2 2 2 => best is 38 (not 46) // (prefer 2 * 2 * 2 to 3 * 2)
2 2 2 2 => best is 28

With five leftover minor primes:
3 3 3 3 3 => 399
3 3 3 3 2 => 299 (not 369) // (prefer 3 * 3 to 3 * 2)
3 3 3 2 2 => 269 (not 349) // (prefer 3 * 3 to 3 * 2) // (but prefer 3 * 2 to 2 * 2)
3 3 2 2 2 => 89  // (prefer 3 * 3 to 3 * 2)
3 2 2 2 2 => 68
2 2 2 2 2 => 48

Priority Hierarchy:
3,3 > 3,2
3,2 > 2,2
2,2,2 > 3,2
3,3 ? 2,2,2

Therefore:
Rank #1: 2,2,2 and 3,3 (8 and 9)
Rank #2: 3,2 (6)
Rank #3: 2,2 (4)

Since this is a decreasing pattern, there might be some other interesting things going on.
*/
const solution = (product: number) => {
	if (product === 0) return 10
	if (product === 1) return 1

	let primeFactors = findPrimeFactors(product)
	if (primeFactors.some(number => number > 9)) return -1

	const digitsProductArray: Array<number> = [ ]
	const countRemaining = (input: number) => {
		return primeFactors.filter(item => item === input).length
	}

	while (countRemaining(2) + countRemaining(3) > 1) {
		// Rank #1 Operations
		if (countRemaining(3) > 1) {
			digitsProductArray.push(9)
			for (let i = 0; i < 2; i++) primeFactors.splice(primeFactors.indexOf(3), 1)
		}

		else if (countRemaining(2) > 2) {
			digitsProductArray.push(8)
			for (let i = 0; i < 3; i++) primeFactors.splice(primeFactors.indexOf(2), 1)
		}

		// Rank #2 Operation
		else if (countRemaining(3) > 0 && countRemaining(2) > 0) {
			digitsProductArray.push(6)
			primeFactors.splice(primeFactors.indexOf(2), 1)
			primeFactors.splice(primeFactors.indexOf(3), 1)
		}

		// Rank #3 Operation
		else if (countRemaining(2) > 1) {
			digitsProductArray.push(4)
			for (let i = 0; i < 2; i++) primeFactors.splice(primeFactors.indexOf(2), 1)
		}

		// Error
		else {
			throw new Error("There is an invalid number of 3's and 2's in the primeFactors array. I feel betrayed.")
		}
	}

	// Add all remaining prime factors and sort them.
	digitsProductArray.push(...primeFactors)
	digitsProductArray.sort((a, b) => a - b)

	// Join the array and return it.
	return parseInt(digitsProductArray.join(""))
}

export default solution
