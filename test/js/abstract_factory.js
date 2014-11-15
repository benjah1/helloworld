'use strict';

describe('Test Abstract Factory', function() {
	var FactoryA = require('../../js/abstract_factory/factory_a.js');
	var FactoryB = require('../../js/abstract_factory/factory_b.js');
	var factory, product;

	it('create product A', function() {
		factory = new FactoryA();
		product = factory.createProduct();
		expect(product.getName()).to.be.equal('ProductA');
	});

	it('create product B', function() {
		factory = new FactoryB();
		product = factory.createProduct();
		expect(product.getName()).to.be.equal('ProductB');
	});

});