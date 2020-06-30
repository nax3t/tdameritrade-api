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
    describe('Option', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.Option();
      });

      it('should create an instance of Option', function() {
        // TODO: update the code to test Option
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.Option);
      });

      it('should have the property assetType (base name: "assetType")', function() {
        // TODO: update the code to test the property assetType
        expect(instance).to.have.property('assetType');
        // expect(instance.assetType).to.be(expectedValueLiteral);
      });

      it('should have the property cusip (base name: "cusip")', function() {
        // TODO: update the code to test the property cusip
        expect(instance).to.have.property('cusip');
        // expect(instance.cusip).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property optionDeliverables (base name: "optionDeliverables")', function() {
        // TODO: update the code to test the property optionDeliverables
        expect(instance).to.have.property('optionDeliverables');
        // expect(instance.optionDeliverables).to.be(expectedValueLiteral);
      });

      it('should have the property optionMultiplier (base name: "optionMultiplier")', function() {
        // TODO: update the code to test the property optionMultiplier
        expect(instance).to.have.property('optionMultiplier');
        // expect(instance.optionMultiplier).to.be(expectedValueLiteral);
      });

      it('should have the property putCall (base name: "putCall")', function() {
        // TODO: update the code to test the property putCall
        expect(instance).to.have.property('putCall');
        // expect(instance.putCall).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property underlyingSymbol (base name: "underlyingSymbol")', function() {
        // TODO: update the code to test the property underlyingSymbol
        expect(instance).to.have.property('underlyingSymbol');
        // expect(instance.underlyingSymbol).to.be(expectedValueLiteral);
      });

    });
  });

}));
