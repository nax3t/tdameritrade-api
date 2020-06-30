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
    instance = new GitChrisQueen_TDA_JS.MarginAccount();
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

  describe('MarginAccount', function() {
    it('should create an instance of MarginAccount', function() {
      // uncomment below and update the code to test MarginAccount
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.MarginAccount);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property roundTrips (base name: "roundTrips")', function() {
      // uncomment below and update the code to test the property roundTrips
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property isDayTrader (base name: "isDayTrader")', function() {
      // uncomment below and update the code to test the property isDayTrader
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property isClosingOnlyRestricted (base name: "isClosingOnlyRestricted")', function() {
      // uncomment below and update the code to test the property isClosingOnlyRestricted
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property positions (base name: "positions")', function() {
      // uncomment below and update the code to test the property positions
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property orderStrategies (base name: "orderStrategies")', function() {
      // uncomment below and update the code to test the property orderStrategies
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property initialBalances (base name: "initialBalances")', function() {
      // uncomment below and update the code to test the property initialBalances
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property currentBalances (base name: "currentBalances")', function() {
      // uncomment below and update the code to test the property currentBalances
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

    it('should have the property projectedBalances (base name: "projectedBalances")', function() {
      // uncomment below and update the code to test the property projectedBalances
      //var instane = new GitChrisQueen_TDA_JS.MarginAccount();
      //expect(instance).to.be();
    });

  });

}));
