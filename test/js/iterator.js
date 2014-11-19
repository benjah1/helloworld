'use strict';

describe('Test Iterator', function() {
	var IIterator = require('../../js/iterator/interface_iterator.js'),
		IContainer = require('../../js/iterator/interface_container.js'),
		extend = require('../../js/utility/extendable.js');

	it('test iterate', function() {
		var Iterator = extend(function(collection) {
			var _pos = 0, _collection = collection;

			this.hasNext = function() {
				if (_pos < _collection.size()) {
					return true;
				} else {
					return false;
				}
			};
			this.next = function() {
				if (this.hasNext()) {
					return _collection.get(_pos++);
				} else {
					return false;
				}
			};
		}, IIterator), Container = extend(function() {
			var _content = [];
			this.createIterator = function() {
				return new Iterator(this);
			};
			this.size = function() {
				return _content.length;
			};
			this.add = function(item) {
				_content.push(item);
			};
			this.get = function(i) {
				return _content[i];
			};
		}, IContainer);

		var c = new Container();
		c.add('item 1');
		c.add('item 2');

		var i = c.createIterator(), count = 1;
		while (i.hasNext()) {
			assert.strictEqual(i.next(), 'item ' + count++);
		}
		assert.strictEqual(i.next(),  false);
	});
});