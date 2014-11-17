'use strict';

describe('Test Adapter', function() {
	var Adapter = require('../../js/adapter/adapter.js'),
		Adaptee = require('../../js/adapter/adaptee.js'),
		extend = require('../../js/utility/extendable.js');

	it('adapt run', function() {
		var adapter = new Adapter(),
			adaptee = new Adaptee();

		adapter.adapt(adaptee);

		assert.strictEqual(adapter.run(), 'Adaptee run');
	});

	it('extended adapt run', function() {
		var MyAdapter = extend(function() {
			this.identity = function() {
				return 'MyAdapter';
			};
		}, Adapter),
			MyAdaptee = extend(function() {
				this.run = function() {
					return 'MyAdaptee run';
				};
			}, Adaptee);

		var adapter = new MyAdapter(),
			adaptee = new MyAdaptee();

		adapter.adapt(adaptee);

		assert.strictEqual(adapter.identity(), 'MyAdapter');
		assert.strictEqual(adapter.run(), 'MyAdaptee run');
	});

});