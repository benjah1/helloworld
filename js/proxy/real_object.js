'use strict';

module.exports = (function() {
	var ISubject = require('../../js/proxy/interface_object.js'),
		extend = require('../../js/utility/extendable.js');

	var Subject = extend(function() {
		this.run = function() {
			return 'Subject';
		};
	}, ISubject);
	return Subject;
})();