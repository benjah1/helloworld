'use strict';

module.exports = (function() {
	var Composite = function() {
		var collection = [];

		this.get = function(i) {
			return collection[i];
		};

		this.add = function(obj) {
			collection.push(obj);
		};

		this.remove = function(obj) {
			var i;
			for (i in collection) {
				if (obj === collection[i]) {
					collection.splice(i,1);
				}
			}
		};

		this.size = function() {
			return collection.length;
		};
	};

	return Composite;
})();