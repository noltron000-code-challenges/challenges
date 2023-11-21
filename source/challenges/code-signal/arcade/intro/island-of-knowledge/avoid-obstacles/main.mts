const canAvoidObstacles = (obstacles: Array<number>) => {
	let smallestJump = Math.max(...obstacles) + 1

	for (let jump = smallestJump - 1; jump > 0; jump--) {
		const reducer = (result: boolean, obstacle: number) => {
			if (result === false) return false
			else return obstacle % jump !== 0
		}

		const jumpAvoidsObstacles = obstacles.reduce(reducer, true)
		if (jumpAvoidsObstacles && jump < smallestJump) {
			smallestJump = jump
		}
	}

	return smallestJump
}

export default canAvoidObstacles
