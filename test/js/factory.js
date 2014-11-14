
describe('Test Factory', function() {
	var Factory = require('../../js/factory/factory.js');
	var factory, product;

	it('create product', function() {
		factory = new Factory();
		product = factory.createProduct();
		expect(product.getName()).to.be.equal('product');
	});

});
