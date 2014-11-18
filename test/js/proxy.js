'use strict';

describe('Test Proxy', function() {
	var Proxy = require('../../js/proxy/proxy.js'),
		Subject = require('../../js/proxy/real_object.js');

	it('test proxy', function() {
		var p = new Proxy(),
			s = new Subject();

		p.wrap(s);
		assert.strictEqual(p.run(), 'Proxy Subject');
	});
	
});