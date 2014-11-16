'use strict';

module.exports = (function() {
	var Product = require('../../js/builder/product.js');

	var Builder = function() {
		var options = {
			a: 'a',
			b: 'b'
		};

		this.set = function(args) {
			var prop;
			for(prop in args) {
				options[prop] = args[prop];
			}
		};

		this.build = function() {
			return new Product(options);
		};
	};	

	return Builder;
})();