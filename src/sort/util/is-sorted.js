module.exports = function(a, c) {
    for (let i = 1; i < a.length; i++) {
    	c && c.incCond();
        if (a[i] < a[i - 1]) return false;
    }
    return true;
}
