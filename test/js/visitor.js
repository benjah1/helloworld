'use strict';

describe('Test Visitor', function() {
	var IVisitor = require('../../js/visitor/interface_visitor.js'),
		IElement = require('../../js/visitor/interface_element.js'),
		extend = require('../../js/utility/extendable.js');

	it('test', function() {
		var A = extend(function() {
			this.id = 'ElmA';
			this.accept = function(visitor) {
				return visitor.visit(this);
			};
		}, IElement), B = extend(function() {
			this.id = 'ElmB';
			this.accept = function(visitor) {
				return visitor.visit(this);
			};
		}, IElement);

		var C = extend(function() {
			this.id = 'ElmC';
			this.accept = function(visitor) {
				var a = new A(), b = new B();
				return a.accept(visitor) + b.accept(visitor) + visitor.visit(this);
			};
		}, IElement);

		var VA = extend(function() {
			this.visit = function(elm) {
				return 'Visitor A visit ' + elm.id + '; ';
			};
		}, IVisitor), VB = extend(function() {
			this.visit = function(elm) {
				return 'Visitor B visit ' + elm.id + '; ';
			};
		}, IVisitor);

		var c = new C();
		assert.strictEqual(c.accept(new VA()), 'Visitor A visit ElmA; Visitor A visit ElmB; Visitor A visit ElmC; ');
		assert.strictEqual(c.accept(new VB()), 'Visitor B visit ElmA; Visitor B visit ElmB; Visitor B visit ElmC; ');
	});
});