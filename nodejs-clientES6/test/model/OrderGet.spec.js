/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.OrderGet();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OrderGet', function() {
    it('should create an instance of OrderGet', function() {
      // uncomment below and update the code to test OrderGet
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.OrderGet);
    });

    it('should have the property session (base name: "session")', function() {
      // uncomment below and update the code to test the property session
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property orderType (base name: "orderType")', function() {
      // uncomment below and update the code to test the property orderType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property cancelTime (base name: "cancelTime")', function() {
      // uncomment below and update the code to test the property cancelTime
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property complexOrderStrategyType (base name: "complexOrderStrategyType")', function() {
      // uncomment below and update the code to test the property complexOrderStrategyType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property quality (base name: "quality")', function() {
      // uncomment below and update the code to test the property quality
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property filledQuantity (base name: "filledQuantity")', function() {
      // uncomment below and update the code to test the property filledQuantity
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property remainingQuantity (base name: "remainingQuantity")', function() {
      // uncomment below and update the code to test the property remainingQuantity
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property requestedDestination (base name: "requestedDestination")', function() {
      // uncomment below and update the code to test the property requestedDestination
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property destinationLinkName (base name: "destinationLinkName")', function() {
      // uncomment below and update the code to test the property destinationLinkName
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property releaseTime (base name: "releaseTime")', function() {
      // uncomment below and update the code to test the property releaseTime
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property stopPrice (base name: "stopPrice")', function() {
      // uncomment below and update the code to test the property stopPrice
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property stopPriceLinkBasis (base name: "stopPriceLinkBasis")', function() {
      // uncomment below and update the code to test the property stopPriceLinkBasis
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property stopPriceLinkType (base name: "stopPriceLinkType")', function() {
      // uncomment below and update the code to test the property stopPriceLinkType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property stopPriceOffset (base name: "stopPriceOffset")', function() {
      // uncomment below and update the code to test the property stopPriceOffset
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property stopType (base name: "stopType")', function() {
      // uncomment below and update the code to test the property stopType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property priceLinkBasis (base name: "priceLinkBasis")', function() {
      // uncomment below and update the code to test the property priceLinkBasis
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property priceLinkType (base name: "priceLinkType")', function() {
      // uncomment below and update the code to test the property priceLinkType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property taxLotMethod (base name: "taxLotMethod")', function() {
      // uncomment below and update the code to test the property taxLotMethod
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property orderLegCollection (base name: "orderLegCollection")', function() {
      // uncomment below and update the code to test the property orderLegCollection
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property activationPrice (base name: "activationPrice")', function() {
      // uncomment below and update the code to test the property activationPrice
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property specialInstruction (base name: "specialInstruction")', function() {
      // uncomment below and update the code to test the property specialInstruction
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property orderStrategyType (base name: "orderStrategyType")', function() {
      // uncomment below and update the code to test the property orderStrategyType
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property cancelable (base name: "cancelable")', function() {
      // uncomment below and update the code to test the property cancelable
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property editable (base name: "editable")', function() {
      // uncomment below and update the code to test the property editable
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property enteredTime (base name: "enteredTime")', function() {
      // uncomment below and update the code to test the property enteredTime
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property closedTime (base name: "closedTime")', function() {
      // uncomment below and update the code to test the property closedTime
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property orderActivityCollection (base name: "orderActivityCollection")', function() {
      // uncomment below and update the code to test the property orderActivityCollection
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property replacingOrderCollection (base name: "replacingOrderCollection")', function() {
      // uncomment below and update the code to test the property replacingOrderCollection
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property childOrderStrategies (base name: "childOrderStrategies")', function() {
      // uncomment below and update the code to test the property childOrderStrategies
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

    it('should have the property statusDescription (base name: "statusDescription")', function() {
      // uncomment below and update the code to test the property statusDescription
      //var instane = new GitChrisQueen_TDA_JS.OrderGet();
      //expect(instance).to.be();
    });

  });

}));
