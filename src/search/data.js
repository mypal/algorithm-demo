let arr;
module.exports = {
	generate: (n) => {
		arr = new Array(n);
		for (let i = 0; i < n; i++) {
			arr[i] = i;
		}
	},
	getArr: () => {
		return arr;
	}
}
