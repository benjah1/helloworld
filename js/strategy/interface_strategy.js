'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IStrategy = function() {
		this.run = voidfunction;
	};
	return IStrategy;
})();