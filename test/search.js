// const assert = require('assert');
// const binarySearch = require('../src/search/binary');
// const linearSearch = require('../src/search/linear');
// const dataGen = require('../src/search/data');

// describe('Search', function() {
//     this.timeout(10000);
//     this.slow(1);
//     let testN = (n, disableLinear, isInArr) => {
//         describe(`n=${n}`, () => {
//             before(() => {
//                 dataGen.generate(n);
//             })
//             let testItem = (name, func) => {
//                 it(name, (done) => {
//                     setTimeout(() => {
//                         let arr = dataGen.getArr(),
//                             len = arr.length;
//                         for (let i = 0; i < len; i++) {
//                             assert.equal(isInArr ? arr[i] : -1, func(arr, isInArr ? arr[i] : len));
//                         }
//                         done();
//                     }, 0);
//                 });
//             };
//             if (disableLinear) {
//                 testItem.apply(null, ['binary', binarySearch]);
//             } else {
//                 [
//                     ['linear', linearSearch],
//                     ['binary', binarySearch]
//                 ].forEach((item) => {
//                     testItem.apply(null, item);
//                 });
//             }
//         });
//     };
//     describe('key in arr', () => {
//         [10, 1000, 10000, 100000].forEach((item) => {
//             testN(item, false, true);
//         });
//         testN(1000000, true, true);
//     });
//     describe('key out of arr', () => {
//         [10, 1000, 10000, 100000].forEach((item) => {
//             testN(item, false, false);
//         });
//         testN(1000000, true, false);
//     });
// });
