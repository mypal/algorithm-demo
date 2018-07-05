function Counter() {
	this.condCount = 0;
	this.swapCount = 0;
}

Counter.prototype.incCond = function() {
	this.condCount++;
};
Counter.prototype.incSwap = function() {
	this.swapCount++;
}
Counter.prototype.getStat = function() {
	return {
		condCount: this.condCount,
		swapCount: this.swapCount
	}
}

module.exports = Counter;