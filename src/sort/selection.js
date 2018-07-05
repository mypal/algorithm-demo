const swap = require('./util/swap');

module.exports = function(a, c) {
	let n = a.length;
	let i, j;
	for (i = 0; i < n; i++) {
		for (j = i+1; j < n; j++) {
			c && c.incCond();
			if (a[i] > a[j]) {
				swap(a, i, j, c);
			}
		}
	}
	return a;
}