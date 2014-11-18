'use strict';

module.exports = (function() {
	var Decorator = function() {
		this.describe = function() {
			return 'This is Decorator';
		};
	};
	return Decorator;
})();