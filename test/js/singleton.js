
describe("Test singleton", function() {	

	var Singleton = require('../js/singleton.js');

	it('only one instance', function() {
		var a = new Singleton(1);
		expect(a.get()).to.be.equal(1); 

		a.set(2);
		expect(a.get()).to.be.equal(2); 

		var b = new Singleton();
		expect(b.get()).to.be.equal(2); 
	});

});
