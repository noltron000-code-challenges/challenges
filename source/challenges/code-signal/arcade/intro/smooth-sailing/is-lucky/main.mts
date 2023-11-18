const sum = (a, b) => a + b

const solution = (n: number) => {
  const numbers = n
	.toString( )
	.split("")
	.map(digit => parseInt(digit))

  const firstHalf = numbers
  .slice(0, Math.floor(numbers.length / 2))
  .reduce(sum, 0)

  const lastHalf = numbers
  .slice(Math.floor(numbers.length / 2), numbers.length)
  .reduce(sum, 0)

  return firstHalf === lastHalf
}
