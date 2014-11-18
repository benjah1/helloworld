'use strict';

module.exports = (function() {

	var supports = {}, extend;
	supports.objectCreate = typeof Object.create === 'function' ? true : false;
	supports.objectKeys = !!Object.keys;
	supports.arrayProtoMap = !!Array.prototype.map;
	
	if ( supports.objectCreate && supports.objectKeys && supports.arrayProtoMap) {
		extend = function(Target, Source) {
			var create = function() {
				var constructorArgs = arguments;
				var extended = {}, 
					sourced = (function(O) {
				    function F(args) {
			        return O.apply(this, args);
				    }
				    F.prototype = O.prototype;
				    return new F(constructorArgs);
					})(Source),
					targeted = (function(O) {
				    function F(args) {
			        return O.apply(this, args);
				    }
				    F.prototype = O.prototype;
				    return new F(constructorArgs);
					})(Target);
		    Object.keys(sourced).map(function (prop) {
		       extended[prop] = sourced[prop];
		    });
		    Object.keys(targeted).map(function (prop) {
		       extended[prop] = targeted[prop];
		    });
		    extended.super = function() {
		    	return sourced;
		    };
	    	return extended;
		  };
	    return create;
	  };

	} else {
		extend = function(Target, Source) {
			var create = function() {
				var constructorArgs = arguments;
				var extended = {}, 
					sourced = (function(O) {
				    function F(args) {
			        return O.apply(this, args);
				    }
				    F.prototype = O.prototype;
				    return new F(constructorArgs);
					})(Source),
					targeted = (function(O) {
				    function F(args) {
			        return O.apply(this, args);
				    }
				    F.prototype = O.prototype;
				    return new F(constructorArgs);
					})(Target),
			    prop;
		    for (prop in sourced) {
	        if (Object.prototype.hasOwnProperty.call(sourced, prop)) {
	            extended[prop] = sourced[prop];
	        }
		    }
		    for (prop in targeted) {
		        if (Object.prototype.hasOwnProperty.call(targeted, prop)) {
		            extended[prop] = targeted[prop];
		        }
		    }
		    extended.super = function() {
		    	return sourced;
		    };
		    return extended;
		  };
	    return create;
	  };
	}

	return extend;

})();