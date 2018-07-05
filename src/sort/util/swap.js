module.exports = function(a, i, j, c) {
	// a[i] = a[i]^a[j];
	// a[j] = a[i]^a[j];
	// a[i] = a[i]^a[j];
	var t = a[i];
	a[i] = a[j];
	a[j] = t;
	c && c.incSwap();
}