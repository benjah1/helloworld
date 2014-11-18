'use strict';

describe('Test Facade', function() {
	var Facade = require('../../js/facade/facade.js'),
		extend = require('../../js/utility/extendable.js');

	it('run directly', function() {
		var f = new Facade();

		assert.throw(f.run, 'Need implementation');
	});

	it('extend', function() {
		var A = function(){
			this.run = function() {
				return 'A';
			};
		}, B = function() {
			this.run = function() {
				return 'B';
			};
		}, MyFacade = extend(function() {
			var a = new A(), b = new B();

			this.run = function() {
				return a.run() + ' ' + b.run();
			};
		}, Facade);

		var f = new MyFacade(); 
		assert.strictEqual(f.run(), 'A B');
	});

});