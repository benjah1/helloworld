'use strict';

module.exports = (function() {
	var Observable = function() {
		var _observers = [];
		this.register = function(observer) {
			_observers.push(observer);
		};
		this.notifyAll = function() {
			var i;
			for (i in _observers) {
				_observers[i].notify();
			}
		};
	};
	return Observable;
})();