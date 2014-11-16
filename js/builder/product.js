'use strict';

module.exports = (function() {
	var Product = function(args) {
		this.a = 'a';
		this.b = 'b';
		var prop;
		
		for(prop in this) {
			this[prop] = args[prop];
		}
	};

	return Product;
})();