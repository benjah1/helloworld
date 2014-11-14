'use strict';

describe('Test singleton', function() {	

	var Singleton = require('../../js/singleton/singleton.js');

	it('only one instance', function() {
		var a = new Singleton(1);
		expect(a.get()).to.be.equal(1); 

		a.set(2);
		expect(a.get()).to.be.equal(2); 

		var b = new Singleton();
		expect(b.get()).to.be.equal(2); 
	});

	it('even cross scope', function() {
		var c = new Singleton();
		expect(c.get()).to.be.equal(2); 
	});

	it('or in another perspective', function() {
		var d = new Singleton();
		expect(d.get()).to.be.equal(2); 

		var e = new Singleton();
		e.set(3);
		expect(d.get()).to.be.equal(3);
	});

});
