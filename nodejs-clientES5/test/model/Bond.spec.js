/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
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
    describe('Bond', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.Bond();
      });

      it('should create an instance of Bond', function() {
        // TODO: update the code to test Bond
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.Bond);
      });

      it('should have the property AssetType (base name: "assetType")', function() {
        // TODO: update the code to test the property AssetType
        expect(instance).to.have.property('AssetType');
        // expect(instance.AssetType).to.be(expectedValueLiteral);
      });

      it('should have the property BondPrice (base name: "bondPrice")', function() {
        // TODO: update the code to test the property BondPrice
        expect(instance).to.have.property('BondPrice');
        // expect(instance.BondPrice).to.be(expectedValueLiteral);
      });

      it('should have the property Cusip (base name: "cusip")', function() {
        // TODO: update the code to test the property Cusip
        expect(instance).to.have.property('Cusip');
        // expect(instance.Cusip).to.be(expectedValueLiteral);
      });

      it('should have the property Description (base name: "description")', function() {
        // TODO: update the code to test the property Description
        expect(instance).to.have.property('Description');
        // expect(instance.Description).to.be(expectedValueLiteral);
      });

      it('should have the property Exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property Exchange
        expect(instance).to.have.property('Exchange');
        // expect(instance.Exchange).to.be(expectedValueLiteral);
      });

      it('should have the property Symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property Symbol
        expect(instance).to.have.property('Symbol');
        // expect(instance.Symbol).to.be(expectedValueLiteral);
      });

    });
  });

}));