const swap = require('./util/swap');
module.exports = function(a, c) {
	let n = a.length;
	for (let i = n-1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			c && c.incCond();
			if (a[j] > a[j+1]) {
				swap(a, j, j+1, c);
			}
		}
	}
	return a;
}