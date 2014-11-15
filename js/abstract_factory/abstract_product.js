'use strict';

module.exports = (function() {

	var IProduct = function() {
		this.desc = function() {
			return 'IProduct';
		};
	};

	return IProduct;
})();