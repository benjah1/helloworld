'use strict';

describe('Test Composite', function() {
	var Composite = require('../../js/composite/composite.js'),
		extend = require('../../js/utility/extendable.js');

	var Item = extend(function(key) {
		this.identify = key;
		this.loop = function() {
			var i, o, s = this.identify;
			for (i = 0; i < this.size(); ++i) {
				o = this.get(i);
				s = s + ' ' + o.loop();
			}
			return s;
		};
	}, Composite);
		
	var item0 = new Item('item0'),
		item1 = new Item('item1'),
		item2 = new Item('item2'),
		item3 = new Item('item3'),
		item4 = new Item('item4');

	it('test add', function() {
		item0.add(item1);
		item0.add(item2);
		item1.add(item3);
		item3.add(item4);

		assert.strictEqual(item0.size(),2);
		assert.strictEqual(item1.size(),1);
		assert.strictEqual(item2.size(),0);
		assert.strictEqual(item3.size(),1);
		assert.strictEqual(item4.size(),0);

	});

	it('test loop', function() {
		assert.strictEqual(item0.loop(), 'item0 item1 item3 item4 item2');
	});

	it('test remove', function() {
		item3.remove(item4);

		assert.strictEqual(item3.size(),0);
		assert.strictEqual(item0.loop(), 'item0 item1 item3 item2');
	});
	
});