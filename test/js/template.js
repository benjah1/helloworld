'use strict';

describe('Test Template', function() {
	var ITemplate = require('../../js/template/interface_template.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var A = extend(function() {
			this.a = function() {
				return 'A';
			};
			this.b = function() {
				return 'B';
			};
		}, ITemplate), B = extend(function() {
			this.a = function() {
				return 'AA';
			};
			this.b = function() {
				return 'BB';
			};
		}, ITemplate);

		var a = new A(), b = new B();
		assert.strictEqual(a.run(), 'A, B');
		assert.strictEqual(b.run(), 'AA, BB');
	});
});