'use strict';

module.exports = (function() {

	var IFactory = require('../../js/abstract_factory/abstract_product.js');
	var ProductA = require('../../js/abstract_factory/product_a.js');
	var extend = require('../../js/utility/extendable.js');

	var FactoryA = extend(function() {
		this.createProduct = function() {
			return new ProductA();
		};
	}, IFactory);

	return FactoryA;
})();
