const assert = require('assert');
const dfs = require('../src/tsp/dfs');
const dp = require('../src/tsp/dp');
const dataGen = require('../src/tsp/data');

describe('TSP', function() {
    this.timeout(10000);
    this.slow(1);
    let test = (n) => {
        describe(`n=${n}`, () => {
            before(() => {
                dataGen.generate(n);
            });
            if (n <= 11) {
                it('dfs', (done) => {
                    let ans = dfs(dataGen.get());
                    assert.ok(ans > 0 && ans < Infinity);
                    done();
                });
            }
            it('dp', (done) => {
                let ans = dp(dataGen.get());
                assert.ok(ans > 0 && ans < Infinity);
                done();
            });
        });
    };
    [5, 10, 11, 15, 21].forEach(item => test(item));
});
