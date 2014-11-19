'use strict';

describe('Test Command', function() {
	var Command = require('../../js/command/command.js'),
		extend = require('../../js/utility/extendable.js');

	it('Test Command', function() {
		var Subject = function() {
			this.on = function() {
				return 'this is on';
			};
			this.off = function() {
				return 'this is off';
			};
		}, OnCommand = extend(function(obj) {
			var subject = obj;
			this.execute = function() {
				return subject.on();
			};
		}, Command), OffCommand = extend(function(obj) {
			var subject = obj;
			this.execute = function() {
				return subject.off();
			};
		}, Command);

		var s = new Subject(), on = new OnCommand(s), off = new OffCommand(s);
		assert.strictEqual(on.execute(), 'this is on');
		assert.strictEqual(off.execute(), 'this is off');
	});
});