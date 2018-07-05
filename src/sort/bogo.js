const swap = require('./util/swap');
const isSorted = require('./util/is-sorted');

module.exports = function(a, c) {
	let n = a.length;
	function shuffle() {
		for (let i = 0; i < n-1; i++) {
			swap(a, i, i+Math.ceil(Math.random()*(n-i-1)), c);
		}
	};

	while (!isSorted(a, c)) {
		shuffle();
	}

	return a;
}