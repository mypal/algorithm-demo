module.exports = function(a, c) {
	let n = a.length;
	let i, j;
	for (i = 1; i < n; i++) {
		let t = a[i];
		for (j = i; j > 0; j--) {
			c && c.incCond();
			if (a[j-1] <= t) break;
			c && c.incSwap();
			a[j] = a[j-1];
		}
		a[j] = t;
	}
	return a;
}
