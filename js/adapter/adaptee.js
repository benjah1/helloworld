'use strict';

module.exports = (function() {
	var Adaptee = function() {
		this.run = function() {
			return 'Adaptee run';
		};
	};

	return Adaptee;
})();