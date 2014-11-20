'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');

	var IState = function() {
		this.run = voidfunction;
	};
	return IState;
})();