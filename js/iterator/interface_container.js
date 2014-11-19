'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IContainer = function() {
		this.createIterator = voidfunction;
	};
	return IContainer;
})();