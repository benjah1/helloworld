'use strict';

module.exports = (function() {
	var Flyweight = function() {

		this.set = function() {
			throw 'Need implementation';
		};

		this.describe = function() {
			throw 'Need implementation';
		};
	};
	return Flyweight;
})();