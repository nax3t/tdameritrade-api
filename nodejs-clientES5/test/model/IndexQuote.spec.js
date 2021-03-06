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
    describe('IndexQuote', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.IndexQuote();
      });

      it('should create an instance of IndexQuote', function() {
        // TODO: update the code to test IndexQuote
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.IndexQuote);
      });

      it('should have the property _52WkHigh (base name: "52WkHigh")', function() {
        // TODO: update the code to test the property _52WkHigh
        expect(instance).to.have.property('_52WkHigh');
        // expect(instance._52WkHigh).to.be(expectedValueLiteral);
      });

      it('should have the property _52WkLow (base name: "52WkLow")', function() {
        // TODO: update the code to test the property _52WkLow
        expect(instance).to.have.property('_52WkLow');
        // expect(instance._52WkLow).to.be(expectedValueLiteral);
      });

      it('should have the property closePrice (base name: "closePrice")', function() {
        // TODO: update the code to test the property closePrice
        expect(instance).to.have.property('closePrice');
        // expect(instance.closePrice).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property digits (base name: "digits")', function() {
        // TODO: update the code to test the property digits
        expect(instance).to.have.property('digits');
        // expect(instance.digits).to.be(expectedValueLiteral);
      });

      it('should have the property exchange (base name: "exchange")', function() {
        // TODO: update the code to test the property exchange
        expect(instance).to.have.property('exchange');
        // expect(instance.exchange).to.be(expectedValueLiteral);
      });

      it('should have the property exchangeName (base name: "exchangeName")', function() {
        // TODO: update the code to test the property exchangeName
        expect(instance).to.have.property('exchangeName');
        // expect(instance.exchangeName).to.be(expectedValueLiteral);
      });

      it('should have the property highPrice (base name: "highPrice")', function() {
        // TODO: update the code to test the property highPrice
        expect(instance).to.have.property('highPrice');
        // expect(instance.highPrice).to.be(expectedValueLiteral);
      });

      it('should have the property lastPrice (base name: "lastPrice")', function() {
        // TODO: update the code to test the property lastPrice
        expect(instance).to.have.property('lastPrice');
        // expect(instance.lastPrice).to.be(expectedValueLiteral);
      });

      it('should have the property lowPrice (base name: "lowPrice")', function() {
        // TODO: update the code to test the property lowPrice
        expect(instance).to.have.property('lowPrice');
        // expect(instance.lowPrice).to.be(expectedValueLiteral);
      });

      it('should have the property netChange (base name: "netChange")', function() {
        // TODO: update the code to test the property netChange
        expect(instance).to.have.property('netChange');
        // expect(instance.netChange).to.be(expectedValueLiteral);
      });

      it('should have the property openPrice (base name: "openPrice")', function() {
        // TODO: update the code to test the property openPrice
        expect(instance).to.have.property('openPrice');
        // expect(instance.openPrice).to.be(expectedValueLiteral);
      });

      it('should have the property securityStatus (base name: "securityStatus")', function() {
        // TODO: update the code to test the property securityStatus
        expect(instance).to.have.property('securityStatus');
        // expect(instance.securityStatus).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property totalVolume (base name: "totalVolume")', function() {
        // TODO: update the code to test the property totalVolume
        expect(instance).to.have.property('totalVolume');
        // expect(instance.totalVolume).to.be(expectedValueLiteral);
      });

      it('should have the property tradeTimeInLong (base name: "tradeTimeInLong")', function() {
        // TODO: update the code to test the property tradeTimeInLong
        expect(instance).to.have.property('tradeTimeInLong');
        // expect(instance.tradeTimeInLong).to.be(expectedValueLiteral);
      });

    });
  });

}));
