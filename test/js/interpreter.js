'use strict';

describe('Test Interpreter', function() {
	var Expression = require('../../js/interpreter/expression.js'),
		extend = require('../../js/utility/extendable.js');

	it('Test', function() {
		var E1 = extend(function() {
			this.interpret = function() {
				return 'E1';
			};
		}, Expression), E2 = extend(function() {
			this.interpret = function() {
				return 'E2';
			};
		}, Expression);

		var list = [];
		list.push(new E1());
		list.push(new E2());

		var s = '', i;
		for (i in list) {
			s = s + ' ' + list[i].interpret();
		}
		assert.strictEqual(s, ' E1 E2');

	});
});