'use strict';

describe('Test Mediator', function() {
	var IMediator = require('../../js/mediator/mediator.js'),
		IComponent = require('../../js/mediator/interface_component.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var Componenet = extend(function() {
			var state = 'idle';
			this.getState = function() {
				return state;
			};
			this.setState = function(s) {
				state = s;
			};
		}, IComponent);

		var Mediator = extend(function() {
			var componenet = new Componenet();
			
			this.changeState = function(s) {
				componenet.setState(s);
			};
			this.getState = function() {
				return componenet.getState();
			};
		}, IMediator);

		var m = new Mediator();
		assert.strictEqual(m.getState(), 'idle');
		m.changeState('busy');
		assert.strictEqual(m.getState(), 'busy');
	});
});