'use strict';

describe('Test Observer', function() {
	var Observer = require('../../js/observer/observer.js'),
		Observable = require('../../js/observer/observable.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var called = false;
		var MyObserver = extend(function() {
			this.notify = function() {
				called = true;
				this.super().notify();
			};
		}, Observer);

		var observable = new Observable();
		var observer = new MyObserver();

		observable.register(observer);
		observable.notifyAll();
		assert.isTrue(called);
	});
});