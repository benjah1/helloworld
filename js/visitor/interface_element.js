'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IElement = function() {
		this.accept = voidfunction;
	};
	return IElement;
})();