'use strict';

module.exports = (function() {
	var Chain = function() {
		var next;
		this.setNext = function(obj) {
			if (this === obj) {
				throw 'Same chain will create infinited loop';
			}
			next = obj;
		};
		this.run = function() {
			throw 'Need Implementation';
		};
		this.exec = function() {
			var data = this.run();

			if ('undefined' !== next) {
				data = data + ' ' + next.run();
			}
			return data;
		};
	};
	return Chain;
})();