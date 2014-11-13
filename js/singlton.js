'use strict';

window.module = function() {

	var Singleton = (function() {
		var _instance;

		return function(obj) {
			if ('undefined' !== typeof _instance) {
				_instance.set(obj);
				return _instance;
			}

			var _obj = obj;

			_instance = {
				get: function() {
					return obj;
				},
				set: function(obj) {
					_obj = obj;
				}
			};

			return _instance;
		};
	})();

	return Singleton;
};
