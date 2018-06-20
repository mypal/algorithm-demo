const assert = require('assert');
const recursive = require('../src/fibonacci/recursive');
const retrodict = require('../src/fibonacci/retrodict');

describe('Fibonacci', function() {
	this.timeout(100000);
	this.slow(1);
	describe('recursive', () => {
		let test = (n) => {
			it(`n=${n}`, () => {
				assert.ok(recursive(n)>0);
			});
		};
		[10, 20, 30, 40].forEach((item) => {
			test(item);
		});
	});
	describe('retrodict', () => {
		let test = (n, f) => {
			it(`n=${n}`, () => {
				assert.ok(retrodict(n)>0);
			});
		};
		[10, 20, 30, 40, 50, 1000000].forEach((item) => {
			test(item);
		});
	});
});
