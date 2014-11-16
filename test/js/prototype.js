'use strict';

describe('Test Prototype', function() {
	var Prototype = require('../../js/prototype/prototype.js');
	var extend = require('../../js/utility/extendable.js');

	it('clone', function() {
		var p1 = new Prototype();
		var p2 = p1.clone();

		expect(p2.identify).to.be.equal('Prototype');
	});

	it('extend clone', function() {
		var P2 = extend(function() {
			this.identify = 'Prototype2';
		}, Prototype);
		var p1 = new P2();
		var p2 = p1.clone();

		expect(p2.identify).to.be.equal('Prototype2');
	});

});