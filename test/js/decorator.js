'use strict';

describe('Test Decorator', function() {
	var Decorator = require('../../js/decorator/decorator.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var A = extend(function() {
			this.describe = function() {
				return this.super().describe() + ' with A';
			};
		}, Decorator);

		var oa = new A();
		assert.strictEqual(oa.describe(), 'This is Decorator with A');


		var B = extend(function() {
			this.describe = function() {
				return this.super().describe() + ' with B';
			};
		}, A);

		var ob = new B();
		assert.strictEqual(ob.describe(), 'This is Decorator with A with B');
	});
});