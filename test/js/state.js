'use strict';

describe('Test State', function() {
	var IState = require('../../js/state/interface_state.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var A = extend(function() {
			this.run = function() {
				return 'A';
			};
		}, IState), B = extend(function() {
			this.run = function() {
				return 'B';
			};
		}, IState);

		var StateContext = function(state) {
			var _state;
			this.setState = function(state) {
				_state = state;
			};
			this.run = function() {
				return _state.run();
			};
			this.setState(state);
		};

		var a = new A(), b = new B(), s = new StateContext(a);
		assert.strictEqual(s.run(), 'A');
		s.setState(b);
		assert.strictEqual(s.run(), 'B');
	});

});