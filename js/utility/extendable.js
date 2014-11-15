'use strict';

module.exports = (function() {

	var supports = {}, extend;
	supports.objectCreate = typeof Object.create === 'function' ? true : false;
	supports.objectKeys = !!Object.keys;
	supports.arrayProtoMap = !!Array.prototype.map;

	if ( supports.objectCreate && supports.objectKeys && supports.arrayProtoMap ) {
		extend = function(target, source) {
	    var extended = Object.create(source);
	    Object.keys(target).map(function (prop) {
	       extended[prop] = target[prop];
	    });
	    return extended;
	  };

	} else {
		extend = function(target, source) {
			var extended = {};
	    var prop;
	    for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
            extended[prop] = source[prop];
        }
	    }
	    for (prop in target) {
	        if (Object.prototype.hasOwnProperty.call(target, prop)) {
	            extended[prop] = target[prop];
	        }
	    }
	    return extended;
	  };
	}

	return extend;

})();