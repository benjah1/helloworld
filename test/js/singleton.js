'use strict';

describe('Test singleton', function() {	

	var Singleton = require('../../js/singleton/singleton.js');

	it('only one instance', function() {
		var a = new Singleton(1);
		assert.strictEqual(a.get(), 1); 

		a.set(2);
		assert.strictEqual(a.get(), 2); 

		var b = new Singleton();
		assert.strictEqual(b.get(), 2);
		assert.strictEqual(a.get(), 2); 
	});

	it('even cross scope', function() {
		var c = new Singleton();
		assert.strictEqual(c.get(), 2); 
	});

	it('init set', function() {
		var d = new Singleton();
		assert.strictEqual(d.get(), 2);

		var e = new Singleton(3);
		assert.strictEqual(e.get(), 3);
		assert.strictEqual(d.get(), 3);
	});

});
