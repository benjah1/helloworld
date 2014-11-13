'use strict';

module.exports = function() {

	console.log('hiii');
	var Singleton = (function() {
		var _instance;

	console.log('hiii');
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

	console.log(Singleton);

	return Singleton;
};
