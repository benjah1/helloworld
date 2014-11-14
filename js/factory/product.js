'use strict';

module.exports = (function() {
	
	var Product = function() {
		var name = 'product';
		this.getName = function() {
			return name;
		};
	};

	return Product;
})();
