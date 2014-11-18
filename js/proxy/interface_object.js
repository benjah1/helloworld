'use strict';

module.exports = (function() {
	var ISubject = function() {
		this.run = function() {
			throw 'Nedd Implementation';
		};
	};
	return ISubject;
})();