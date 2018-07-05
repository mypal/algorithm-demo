const swap = require('./util/swap');

module.exports = function(a, c) {
    let n = a.length;
    function qs(l, r) {
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
        if (l < j-1) qs(l, j-1);
        if (j+1 < r) qs(j+1, r);
    }
    if (n > 1) qs(0, n-1);
    return a;
}
