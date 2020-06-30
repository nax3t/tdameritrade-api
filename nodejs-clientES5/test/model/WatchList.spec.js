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
    describe('WatchList', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.WatchList();
      });

      it('should create an instance of WatchList', function() {
        // TODO: update the code to test WatchList
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.WatchList);
      });

      it('should have the property accountId (base name: "accountId")', function() {
        // TODO: update the code to test the property accountId
        expect(instance).to.have.property('accountId');
        // expect(instance.accountId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property watchlistId (base name: "watchlistId")', function() {
        // TODO: update the code to test the property watchlistId
        expect(instance).to.have.property('watchlistId');
        // expect(instance.watchlistId).to.be(expectedValueLiteral);
      });

      it('should have the property watchlistItems (base name: "watchlistItems")', function() {
        // TODO: update the code to test the property watchlistItems
        expect(instance).to.have.property('watchlistItems');
        // expect(instance.watchlistItems).to.be(expectedValueLiteral);
      });

    });
  });

}));
