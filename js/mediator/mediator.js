'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IMediator = function() {
		this.changeState = voidfunction;
	};
	return IMediator;
})();