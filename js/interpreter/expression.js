'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');

	var Expression = function() {
		this.interpret = voidfunction;
	};
	return Expression;
})();