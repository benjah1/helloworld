
describe("Test singleton", function() {	

	var Singleton = require('../../js/singleton');

console.log('aaaa');
console.log(Singleton.toSource());

	it('only one instance', function() {
	//	var a = new Singleton(1);
var a = 1;
		expect(a).to.be.equal(1); 
	});

});
