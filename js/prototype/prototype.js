'use strict';

module.exports = (function() {
	var IPrototype = require('../../js/prototype/interface_prototype.js');
	var extend = require('../../js/utility/extendable.js');

	var Prototype = extend(function() {
		this.identify = 'Prototype';

	}, IPrototype);

	return Prototype;
})();