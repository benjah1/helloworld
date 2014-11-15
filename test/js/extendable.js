'use strict';

describe('Test extendable', function() {
	var extend = require('../../js/utility/extendable.js');

		it('only one instance', function() {
			var a = {
				number: 1,
				bool: true,
				magic: 'real',
				animal: 'whale',
				croutons: 'delicious'
			};

			var b = extend({
				number: 2,
				magic: 'real',
				animal: 'porpoise',
				bool: false,
				random: 42
			}, a);

			expect(b.number).to.be.equal(2);
			expect(b.magic).to.be.equal('real');
			expect(b.animal).to.be.equal('porpoise');
			expect(b.bool).to.be.equal(false);
			expect(b.random).to.be.equal(42);
			expect(b.croutons).to.be.equal('delicious');
	});
});