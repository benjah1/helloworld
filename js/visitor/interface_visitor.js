'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IVisitor = function() {
		this.visit = voidfunction;
	};
	return IVisitor;
})();