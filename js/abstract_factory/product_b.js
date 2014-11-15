'use strict';

module.exports = (function() {

	var IProduct = require('../../js/abstract_factory/abstract_product.js');
	var extend = require('../../js/utility/extendable.js');

	var ProductB = extend(function() {
		this.getName = function() {
			return 'ProductB';
		};
	}, IProduct);

	return ProductB;
})();