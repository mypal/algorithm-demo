const swap = require('./util/swap');

module.exports = function(a, c, mode) {
    let n = a.length;
    if (n < 2) return a;
    function partition(l, r) {
        // if (l >= r) return -1;
        if (mode === 1) {
            let idx = (l+r)>>1;
            swap(a, l, idx, c);
        } else if (mode === 2) {
            let idx = l+Math.floor(Math.random()*(r-l+1));
            swap(a, l, idx, c);
        }
        let x = a[l];
        let i = l, j = r;
        while (i < j) {
            while (i < j && x <= a[j]) {
                c && c.incCond();
                j--;
            }
            while (i < j && a[i] <= x) {
                c && c.incCond();
                i++;
            }
            if (i < j) {
                swap(a, i, j, c);
            }
        }
        a[l] = a[j];
        a[j] = x;
        return j;
    }
    let stack = new Array(2*n), t = 0;
    stack[t++] = [0, n-1];
    while (t) {
        let p = stack[--t];
        let k = partition(p[0], p[1]);
        if (k !== -1) {
            if (p[0] < k-1) stack[t++] = [p[0], k-1];
            if (k+1 < p[1]) stack[t++] = [k+1, p[1]];
        }
    }
    return a;
}

