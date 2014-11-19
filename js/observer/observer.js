'use strict';

module.exports = (function () {
	var Observe = function() {
		this.notify = function() {
			return 'Got notify';
		};
	};
	return Observe;
})();