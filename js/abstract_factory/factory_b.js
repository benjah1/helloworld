'use strict';

module.exports = (function() {

	var IFactory = require('../../js/abstract_factory/abstract_product.js');
	var ProductB = require('../../js/abstract_factory/product_b.js');
	var extend = require('../../js/utility/extendable.js');

	var FactoryB = extend(function() {
		this.createProduct = function() {
			return new ProductB();
		};
	}, IFactory);

	return FactoryB;
})();
