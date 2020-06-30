/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CandleListCandles', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.CandleListCandles();
      });

      it('should create an instance of CandleListCandles', function() {
        // TODO: update the code to test CandleListCandles
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.CandleListCandles);
      });

      it('should have the property close (base name: "close")', function() {
        // TODO: update the code to test the property close
        expect(instance).to.have.property('close');
        // expect(instance.close).to.be(expectedValueLiteral);
      });

      it('should have the property datetime (base name: "datetime")', function() {
        // TODO: update the code to test the property datetime
        expect(instance).to.have.property('datetime');
        // expect(instance.datetime).to.be(expectedValueLiteral);
      });

      it('should have the property high (base name: "high")', function() {
        // TODO: update the code to test the property high
        expect(instance).to.have.property('high');
        // expect(instance.high).to.be(expectedValueLiteral);
      });

      it('should have the property low (base name: "low")', function() {
        // TODO: update the code to test the property low
        expect(instance).to.have.property('low');
        // expect(instance.low).to.be(expectedValueLiteral);
      });

      it('should have the property open (base name: "open")', function() {
        // TODO: update the code to test the property open
        expect(instance).to.have.property('open');
        // expect(instance.open).to.be(expectedValueLiteral);
      });

      it('should have the property volume (base name: "volume")', function() {
        // TODO: update the code to test the property volume
        expect(instance).to.have.property('volume');
        // expect(instance.volume).to.be(expectedValueLiteral);
      });

    });
  });

}));
