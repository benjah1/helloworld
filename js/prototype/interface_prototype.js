'use strict';

module.exports = (function() {

	var IPrototype = function() {
		this.identify = 'IPrototype';
		this.clone = function() {
			return Object.create(this);
		};

	};

	return IPrototype;
})();