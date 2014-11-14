'use strict';

module.exports = (function() {

	var Singleton = (function() {
		var _instance, _obj;

		return function(obj) {
			if ('undefined' !== typeof _instance) {
				if ('undefined' !== typeof obj) {
					_instance.set(obj);
				}
				return _instance;
			}
			if ('undefined' !== typeof obj) {
				_obj = obj;
			}
			
			_instance = {
				get: function() { 
					return _obj;
				},
				set: function(obj) {
					_obj = obj;
				}
			};

			return _instance;
		};
	})();

	return Singleton;
})();