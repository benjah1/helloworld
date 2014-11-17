'use strict';

module.exports = (function() {
	var BridgeA = function() {
		this.indentify = 'BridgeA';
		this.runA = function() {
			return 'runA';
		};
		this.runB = function() {
			return 'runB';
		};
	};
	return BridgeA;
})();