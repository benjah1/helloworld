'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IComponenet = function() {
		this.setState = voidfunction;
	};
	return IComponenet;
})();