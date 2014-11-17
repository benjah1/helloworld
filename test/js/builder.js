'use strict';

describe('Test Builder', function () {
	var Builder = require('../../js/builder/builder.js');

	it('create product', function() {
		var builder = new Builder();
		builder.set({
			a: 'ba',
			b: 'bb',
			c: 'bc'
		});

		var product = builder.build();

		expect(product.a).to.be.equal('ba');
		expect(product.b).to.be.equal('bb');
		expect(typeof product.c).to.be.equal('undefined');
	});
});