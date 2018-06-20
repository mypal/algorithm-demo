module.exports = (arr, key) => {
	let l = 0, r = arr.length, m = (l+r)>>1;
	while (l < r) {
		if (arr[m] === key) {
			return m;
		} else if (arr[m] < key) {
			l = m+1;
		} else {
			r = m;
		}
		m = (l+r)>>1;
	}
	return -1;
}