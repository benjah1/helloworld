'use strict';

module.exports = (function() {

	var IProduct = require('../../js/abstract_factory/abstract_product.js');
	var extend = require('../../js/utility/extendable.js');

	var ProductA = extend(function() {
		this.getName = function() {
			return 'ProductA';
		};
	}, IProduct);

	return ProductA;
})();