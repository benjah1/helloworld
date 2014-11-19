'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var Command = function() {
		this.execute = voidfunction;
	};
	return Command;
})();