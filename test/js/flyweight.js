'use strict';

describe('Test Flyweight', function() {
	var Flyweight = require('../../js/flyweight/flyweight.js'),
		extend = require('../../js/utility/extendable.js');

	it('run directly', function() {
		var f = new Flyweight();

		assert.throw(f.set, 'Need implementation');
		assert.throw(f.describe, 'Need implementation');
	});

	it('test extend', function() {
		var A = {
			name: 'A'
		}, B = {
			name: 'B'
		}, MyFlyweight = extend(function() {
			var name;
			this.set = function(obj) {
				name = obj.name;
			};
			this.describe = function() {
				return 'this is ' + name;
			};
		}, Flyweight);

		var f = new MyFlyweight();
		f.set(A);
		assert.strictEqual(f.describe(), 'this is A');
		f.set(B);
		assert.strictEqual(f.describe(), 'this is B');
	});
	
});