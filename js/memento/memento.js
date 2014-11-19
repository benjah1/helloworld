'use strict';

module.exports = (function() {
	var Memento = function(stateToSave) {
		var state = stateToSave;
		this.getSavedState = function() {
			return state;
		};
	};
	return Memento;
})();