'use strict';

describe('Test extendable', function() {
	var extend = require('../../js/utility/extendable.js');

		it('one extend', function() {
			var A = function() {
				this.number = 1;
				this.bool = true;
				this.magic = 'real';
				this.animal = 'whale';
				this.croutons = 'delicious';
			};

			var B = extend(function() {
				this.number = 2;
				this.magic = 'real';
				this.animal = 'porpoise';
				this.bool = false;
				this.random = 42;
			}, A);

			var ob = new B();
			expect(ob.number).to.be.equal(2);
			expect(ob.magic).to.be.equal('real');
			expect(ob.animal).to.be.equal('porpoise');
			expect(ob.bool).to.be.equal(false);
			expect(ob.random).to.be.equal(42);
			expect(ob.croutons).to.be.equal('delicious');
	});

	it('multi extend', function() {
		var A = function() {
			this.a = 'aa';
			this.c = 'ac';
		};

		var B = extend(function() {
			this.b = 'bb';
			this.c = 'bc';
		}, A);

		var C = extend(function() {
			this.c = 'cc';
		}, B);

		var oc = new C();
		expect(oc.a).to.be.equal('aa');
		expect(oc.b).to.be.equal('bb');
		expect(oc.c).to.be.equal('cc');
	});
	
});