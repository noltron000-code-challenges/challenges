const getBestArms = (leftArm: number, rightArm: number) => {
	const bestArms = [leftArm, rightArm]
	bestArms.sort((a, b) => a - b)
	return bestArms
}

const armsAreEqual = (
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number,
) => {
	const yourArms = getBestArms(yourLeft, yourRight)
	const friendsArms = getBestArms(friendsLeft, friendsRight)
	return JSON.stringify(yourArms) === JSON.stringify(friendsArms)
}

export default armsAreEqual
