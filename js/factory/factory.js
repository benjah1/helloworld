'use strict';

module.exports = (function() {

	var Product = require('../../js/factory/product.js');

	var Factory = function() {
		this.createProduct = function() {
			return new Product();
		};

	};

	return Factory;
})();
