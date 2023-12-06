const isTimeValid = (time: string) => {
	let [hh, mm] = time
	.split(":")
	.map((s) => parseFloat(s))

	if (isNaN(hh)) return false
	if (isNaN(mm))return false

	if (hh % 1 !== 0) return false
	if (mm % 1 !== 0) return false

	if (hh < 0) return false
	if (hh > 23) return false

	if (mm < 0) return false
	if (mm > 59) return false

	return true
}

export default isTimeValid
