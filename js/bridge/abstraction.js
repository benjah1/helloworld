'use strict';

module.exports = (function() {
	var Abstration = function(bridge) {
		var _bridge = bridge;
		this.runA = function() {
			return _bridge.indentify + ' ' + _bridge.runA();
		};
		this.runB = function() {
			return _bridge.indentify + ' '+ _bridge.runB();
		};
	};
	return Abstration;
})();