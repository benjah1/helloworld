'use strict';

module.exports = (function() {
	var ISubject = require('../../js/proxy/interface_object.js'),
		extend = require('../../js/utility/extendable.js');

	var Proxy = extend(function() {
		var subject;
		this.wrap = function(obj) {
			subject = obj;
		};
 		this.run = function() {
 			return 'Proxy' + ' ' + subject.run(); 
		};
	}, ISubject);
	return Proxy;
})();