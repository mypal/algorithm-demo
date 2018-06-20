function ListNode(val) {
	return {
		val,
		next: null
	}
}

function HashSet(capacity) {
	this.table = new Array(capacity);
	this.capacity = capacity;
}

HashSet.prototype.hashCode = function(val) {
	return val % this.capacity;
}

HashSet.prototype.add = function(val) {
	let hash = this.hashCode(val);
	let node = ListNode(val);
	node.next = this.table[hash];
	this.table[hash] = node;
}

HashSet.prototype.find = function(val) {
	let hash = this.hashCode(val);
	let p = this.table[hash];
	while (p) {
		if (p.val === val) {
			return true;
		}
		p = p.next;
	}
	return false;
}

module.exports = HashSet;
