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
    instance = new GitChrisQueen_TDA_JS.OrdersApi();
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

  describe('OrdersApi', function() {
    describe('accountsAccountIdOrdersGET', function() {
      it('should call accountsAccountIdOrdersGET successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdOrdersGET
        //instance.accountsAccountIdOrdersGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdOrdersOrderIdDELETE', function() {
      it('should call accountsAccountIdOrdersOrderIdDELETE successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdOrdersOrderIdDELETE
        //instance.accountsAccountIdOrdersOrderIdDELETE(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdOrdersOrderIdGET', function() {
      it('should call accountsAccountIdOrdersOrderIdGET successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdOrdersOrderIdGET
        //instance.accountsAccountIdOrdersOrderIdGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountsAccountIdOrdersOrderIdPUT', function() {
      it('should call accountsAccountIdOrdersOrderIdPUT successfully', function(done) {
        //uncomment below and update the code to test accountsAccountIdOrdersOrderIdPUT
        //instance.accountsAccountIdOrdersOrderIdPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ordersGET', function() {
      it('should call ordersGET successfully', function(done) {
        //uncomment below and update the code to test ordersGET
        //instance.ordersGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ordersPOST', function() {
      it('should call ordersPOST successfully', function(done) {
        //uncomment below and update the code to test ordersPOST
        //instance.ordersPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
