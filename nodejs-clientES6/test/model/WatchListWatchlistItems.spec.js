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
    instance = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
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

  describe('WatchListWatchlistItems', function() {
    it('should create an instance of WatchListWatchlistItems', function() {
      // uncomment below and update the code to test WatchListWatchlistItems
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.WatchListWatchlistItems);
    });

    it('should have the property sequenceId (base name: "sequenceId")', function() {
      // uncomment below and update the code to test the property sequenceId
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property averagePrice (base name: "averagePrice")', function() {
      // uncomment below and update the code to test the property averagePrice
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property commission (base name: "commission")', function() {
      // uncomment below and update the code to test the property commission
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property purchasedDate (base name: "purchasedDate")', function() {
      // uncomment below and update the code to test the property purchasedDate
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property instrument (base name: "instrument")', function() {
      // uncomment below and update the code to test the property instrument
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GitChrisQueen_TDA_JS.WatchListWatchlistItems();
      //expect(instance).to.be();
    });

  });

}));
