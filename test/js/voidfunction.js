'use strict';

describe('Test voidfunction', function() {
	var voidfunction = require('../../js/utility/voidfunction.js'),
		extend = require('../../js/utility/extendable.js');
	
	var A = function() {
		this.run = voidfunction;
	};
	it('Test with interface', function() {
		

		var a = new A();
		assert.throw(a.run, 'Need Implementation');
	});

	it('Test with extend', function() {
		var B = extend(function() {
			this.run = function() {
				return 'Hi';
			};
		}, A);

		var b = new B();
		assert.strictEqual(b.run(), 'Hi');
	});
});