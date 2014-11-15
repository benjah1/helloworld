'use strict';

module.exports = (function() {

	var IProduct = require('../../js/abstract_factory/abstract_product.js');

	var IFactory = function() {
		this.createProductA = function() {
			return new IProduct();
		};
		this.createProductB = function() {
			return new IProduct();
		};

	};

	return IFactory;
})();
