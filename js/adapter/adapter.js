'use strict';

module.exports = (function() {
	var Adapter = function() {
		var adaptee;

		this.adapt = function(obj) {
			adaptee = obj;
		};

		this.run = function() {
			return adaptee.run();
		};
	};

	return Adapter;	
})();