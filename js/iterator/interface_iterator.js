'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');
	var IIterator = function() {
		this.hasNext = voidfunction;
		this.next = voidfunction;
	};
	return IIterator;
})();