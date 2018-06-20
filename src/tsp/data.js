let a;
module.exports = {
	generate: (n) => {
		a = new Array(n);
		for (let i = 0; i < n; i++) {
			a[i] = new Array(n);
			for (let j = 0; j < n; j++) {
				if (j < i) {
					a[i][j] = a[j][i];
				} else if (i === j) {
					a[i][j] = 0;
				} else {
					a[i][j] = Math.random();
				}
			}
		}
	},
	get: () => {
		return a;
	}
}
