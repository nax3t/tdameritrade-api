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

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.AccountsApi();
  });

  describe('(package)', function() {
    describe('AccountsApi', function() {
      describe('accountsAccountIdGET', function() {
        it('should call accountsAccountIdGET successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsAccountIdGET call and complete the assertions
          /*
          var accountId = 56;
          var opts = {};
          opts.fields = "fields_example";

          instance.accountsAccountIdGET(accountId, opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.Account);
            expect(data.securitiesAccount).to.be.a(GitChrisQueen_TDA_JS.AccountSecuritiesAccount);
                  expect(data.securitiesAccount.schema).to.be.a(GitChrisQueen_TDA_JS.SecuritiesAccount);
                    expect(data.securitiesAccount.schema.schema).to.be.a(Object);
                expect(data.securitiesAccount.schema.schema).to.be();

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('accountsGET', function() {
        it('should call accountsGET successfully', function(done) {
          // TODO: uncomment, update parameter values for accountsGET call and complete the assertions
          /*
          var opts = {};
          opts.fields = "fields_example";

          instance.accountsGET(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(GitChrisQueen_TDA_JS.Account);
            expect(data.securitiesAccount).to.be.a(GitChrisQueen_TDA_JS.AccountSecuritiesAccount);
                  expect(data.securitiesAccount.schema).to.be.a(GitChrisQueen_TDA_JS.SecuritiesAccount);
                    expect(data.securitiesAccount.schema.schema).to.be.a(Object);
                expect(data.securitiesAccount.schema.schema).to.be();

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
