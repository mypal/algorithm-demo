module.exports = (arr, key) => {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		if (arr[i] === key) {
			return i;
		}
	}
	return -1;
}