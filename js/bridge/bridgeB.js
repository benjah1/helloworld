'use strict';

module.exports = (function() {
	var BridgeB = function() {
		this.indentify = 'BridgeB';
		this.runA = function() {
			return 'runA';
		};
		this.runB = function() {
			return 'runB';
		};
	};
	return BridgeB;
})();