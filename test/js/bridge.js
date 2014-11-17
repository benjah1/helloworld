'use strict';

describe('Test Bridge', function() {
	var Abstraction = require('../../js/bridge/abstraction.js'),
		BridgeA = require('../../js/bridge/bridgeA.js'),
		BridgeB = require('../../js/bridge/bridgeB.js');

	it('bridge A run', function(){
		var abstraction = new Abstraction(new BridgeA());

		assert.strictEqual(abstraction.runA(), 'BridgeA runA');
		assert.strictEqual(abstraction.runB(), 'BridgeA runB');
	});

	it('bridge B run', function(){
		var abstraction = new Abstraction(new BridgeB());

		assert.strictEqual(abstraction.runA(), 'BridgeB runA');
		assert.strictEqual(abstraction.runB(), 'BridgeB runB');
	});

});