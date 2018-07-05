const MAX_VALUE = 1000000;
let arr = [];
module.exports = {
	genRndArr: function(n, m) {
		arr = new Array(n);
		for (let i = 0; i < n; i++) {
			arr[i] = Math.floor(Math.random(new Date().getTime())*(m ? m : MAX_VALUE));
		}
	},
	genSorArr: function(n, m) {
		arr = new Array(n);
		for (let i = 0; i < n; i++) {
			arr[i] = Math.round((m?m:MAX_VALUE)*i/n);
		}
	},
	genRevArr: function(n, m) {
		arr = new Array(n);
		for (let i = 0; i < n; i++) {
			arr[i] = Math.round((m?m:MAX_VALUE)*(n-i)/n);
		}
	},
	genUniArr: function(n, m) {
		arr = new Array(n);
		for (let i = 0; i < n; i++) {
			arr[i] = m ? m : 0;
		}
	},
	copyArr: function() {
		return Array.from(arr);
	}
}