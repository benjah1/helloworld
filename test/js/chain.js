'use strict';

describe('Test Chain of Responsibility', function() {
	var Chain = require('../../js/chain/chain.js'),
		extend = require('../../js/utility/extendable.js');

	it('run directly', function() {
		var c = new Chain();

		assert.throw(function(){
			c.setNext(c);
		}, 'Same chain will create infinited loop');

		assert.throw(c.run, 'Need Implementation');
	});

	it('test chain', function() {
		var C1 = extend(function() {
			this.run = function() {
				return 'C1';
			};
		}, Chain),
		C2 = extend(function() {
			this.run = function() {
				return 'C2';
			};
		}, Chain),
		C3 = extend(function() {
			this.run = function() {
				return 'C3';
			};
		}, Chain);

		var c1 = new C1(), c2 = new C2(), c3 = new C3();
		c1.setNext(c2);
		c2.setNext(c3);

		assert(c1.exec(), 'C1 C2 C3');
	});

});