'use strict';

describe('Test Strategy', function() {
	var IStrategy = require('../../js/strategy/interface_strategy.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var A = extend(function() {
			this.run = function(a,b) {
				return a + '+' + b;
			};
		}, IStrategy), B = extend(function() {
			this.run = function(a,b) {
				return a + '-' + b;
			};
		}, IStrategy);

		var C = function(s) {
			var _strategy = s;
			this.run = function(a,b) {
				return _strategy.run(a,b);
			};
		};

		var c1 = new C(new A()), c2 = new C(new B());

		assert.strictEqual(c1.run('A', 'B'), 'A+B');
		assert.strictEqual(c2.run('A', 'B'), 'A-B');
	});
});