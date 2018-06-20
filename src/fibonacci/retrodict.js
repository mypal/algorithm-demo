module.exports = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 1;
	let f0 = 0, f1 = 1, f2;
	for (let i = 2; i <= n; i++) {
		f2 = f0+f1;
		f0 = f1;
		f1 = f2;
	}
	return f2;
};
