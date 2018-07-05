const swap = require('./util/swap');

module.exports = function(a, c) {
    function buildHeap(a, j) {
        while (j > 0) {
            let i = j >> 1;
            c && c.incCond();
            if (a[i] < a[j]) {
            	swap(a, i, j, c);
            } else {
            	break;
            }
            j = i;
        }
    }
    function sinkHeap(a, n) {
    	let i = 0;
    	while (i << 1 < n) {
    		let j = i << 1;
    		if (j > n) break;
    		if (j+1 < n && a[j] < a[j+1]) j++;
    		c && c.incCond();
    		if (a[i] < a[j]) {
    			swap(a, i, j, c);
    		} else {
    			break;
    		}
    		i = j;
    	}
    }
    let n = a.length;
    for (let i = 0; i < n; i++) {
        buildHeap(a, i);
    }
    for (let i = n - 1; i > 0; i--) {
    	swap(a, 0, i, c);
    	sinkHeap(a, i);
    }
    return a;
}
