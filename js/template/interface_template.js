'use strict';

module.exports = (function() {
	var voidfunction = require('../../js/utility/voidfunction.js');

	var ITemplate = function() {
		this.a = voidfunction;
		this.b = voidfunction;
		this.run = function() {
			return this.a() + ', ' + this.b();
		};
	};
	return ITemplate;
})();