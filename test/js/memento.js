'use strict';

describe('Test Memento', function() {
	var Memento = require('../../js/memento/memento.js');

	it('test', function() {
		var O = function() {
			var state = '';
			this.set = function(s) {
				state = s;
			};
			this.save = function() {
				return new Memento(state);
			};
			this.load = function(memento) {
				state = memento.getSavedState();
			};
			this.get = function() {
				return state;
			};
		};

		var o = new O(), d = [];
		o.set('state 1');
		o.set('state 2');
		d.push(o.save());
		o.set('state 3');
		assert.strictEqual(o.get(), 'state 3');
		d.push(o.save());
		o.load(d[0]);
		assert.strictEqual(o.get(), 'state 2');
		o.load(d[1]);
		assert.strictEqual(o.get(), 'state 3');

	});
});