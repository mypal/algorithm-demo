// const assert = require('assert');
// const HashSet = require('../src/hashset/hashset');

// describe('HashSet', function() {
//     this.timeout(100000);
//     this.slow(1);
//     let test = (name, keyInSet) => {
//         describe(name, () => {
//             let testCapacity = (capacity) => {
//                 describe(`capacity=${capacity}`, () => {
//                     let hashSet = new HashSet(capacity);
//                     let testN = (prevN, n) => {
//                         for (let i = prevN; i < n; i++) {
//                             hashSet.add(i);
//                         }
//                         let itName = `n=${n}`;
//                         it(itName, (done) => {
//                             let delta = keyInSet ? 0 : n;
//                             for (let i = 0; i < n; i++) {
//                                 assert.equal(!!keyInSet, hashSet.find(i + delta));
//                             }
//                             done();
//                         });
//                     };
//                     let listN = [0, 1000, 100000, 1000000];
//                     for (let i = 1; i < listN.length; i++) {
//                     	if (listN[i]/capacity < 10000) {
// 	                        testN(listN[i - 1], listN[i]);
//                     	}
//                     }
//                 });
//             };
//             [743, 750, 750000].forEach((item) => {
//                 testCapacity(item);
//             });
//         });
//     };
//     test('key in set', true);
//     test('key out of set', true);
// });
