const assert = require('assert');
const Data = require('../src/sort/data');
const Counter = require('../src/sort/util/counter');
const isSorted = require('../src/sort/util/is-sorted');
const Bubble = require('../src/sort/bubble');
const Insertion = require('../src/sort/insertion');
const Selection = require('../src/sort/selection');
const Quick = require('../src/sort/quick-stack');
const Heap = require('../src/sort/heap');
const Bogo = require('../src/sort/bogo');

function builtInSort(arr) {
    return arr.sort((a, b) => {
        return a < b ? -1 : a === b ? 0 : 1;
    });
}

function callSort(method, counter) {
    return method(Data.copyArr(), counter);
}

const sortAlgorithmList = [{
    name: 'bubble',
    method: Bubble,
    limit: 10000
}, {
    name: 'insertion',
    method: Insertion,
    limit: 10000
}, {
    name: 'selection',
    method: Selection,
    limit: 10000
}, {
    name: 'heap',
    method: Heap,
    limit: 1000000
}, {
    name: 'quick-left index',
    method: Quick,
    limit: 1000000
}, {
    name: 'quick-middle index',
    method: (n, c) => Quick(n, c, 1),
    limit: 1000000
}, {
    name: 'quick-random index',
    method: (n, c) => Quick(n, c, 2),
    limit: 1000000
}, {
    name: 'bogo',
    method: Bogo,
    limit: 5
}, {
    name: 'built-in',
    method: builtInSort,
    limit: 1000000
}];
const scaleList = [
    [10],
    [1000],
    [10000],
    [100000],
    [100000, 100]
];
const dataGenList = [{
    name: 'random array',
    method: Data.genRndArr
}, {
    name: 'sorted array',
    method: Data.genSorArr
}, {
    name: 'reserve array',
    method: Data.genRevArr
}, {
    name: 'unique key array',
    method: Data.genUniArr
}];
const conditionsList = [
    [0, 1, 2, 3, 5, 6, 8].map(idx => sortAlgorithmList[idx]), [1, 2, 3, 4].map(idx => scaleList[idx]), [0].map(idx => dataGenList[idx])
];

function getName(idx, item) {
    switch (idx) {
        case 0:
        case 2:
            return item.name;
        case 1:
            return `n=${item[0]}` + (item[1] ? ` 0<key<=${item[1]}` : '');
    }
}

describe('Sort', function() {
    this.timeout(100000);
    this.slow(1);

    for (let i = 0; i < conditionsList[2].length; i++) {
        describe(getName(2, conditionsList[2][i]), () => {
            for (let j = 0; j < conditionsList[1].length; j++) {
                describe(getName(1, conditionsList[1][j]), () => {
                    before(() => {
                        conditionsList[2][i].method.apply(null, conditionsList[1][j]);
                    });
                    for (let k = 0; k < conditionsList[0].length; k++) {
                        if (conditionsList[0][k].limit >= conditionsList[1][j][0]) {
                            it(getName(0, conditionsList[0][k]), () => {
                                let counter = new Counter();
                                assert.ok(isSorted(callSort(conditionsList[0][k].method, counter)));
                                // assert.deepEqual(callSort(p[0].method, counter), callSort(builtInSort))
                                console.log(JSON.stringify(counter.getStat()));
                            });
                        }
                    }
                });
            }
        });
    }
});
