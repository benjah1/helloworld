'use strict';

module.exports = (function () {
	var Facade = function() {
		this.run = function() {
			throw 'Need implementation';
		};
	};
	return Facade;
})();