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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ErrorObject', 'model/Transaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorObject'), require('../model/Transaction'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.TransactionsApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.ErrorObject, root.GitChrisQueen_TDA_JS.Transaction);
  }
}(this, function(ApiClient, ErrorObject, Transaction) {
  'use strict';

  /**
   * Transactions service.
   * @module api/TransactionsApi
   * @version 0.1.4
   */

  /**
   * Constructs a new TransactionsApi. 
   * @alias module:api/TransactionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Transactions
     * Transaction for a specific account.
     * @param {String} accountId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Only transactions with the specified type will be returned.
     * @param {String} opts.symbol Only transactions with the specified symbol will be returned.
     * @param {String} opts.startDate Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
     * @param {String} opts.endDate Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    this.accountsAccountIdTransactionsGETWithHttpInfo = function(accountId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsGET");
      }


      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'type': opts['type'],
        'symbol': opts['symbol'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Transaction;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Transactions
     * Transaction for a specific account.
     * @param {String} accountId 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.type Only transactions with the specified type will be returned.
     * @param {String} opts.symbol Only transactions with the specified symbol will be returned.
     * @param {String} opts.startDate Only transactions after the Start Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
     * @param {String} opts.endDate Only transactions after the end Date will be returned. Note: The maximum date range is one year. Valid ISO-8601 formats are : yyyy-MM-dd.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    this.accountsAccountIdTransactionsGET = function(accountId, opts) {
      return this.accountsAccountIdTransactionsGETWithHttpInfo(accountId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Transaction
     * Transaction for a specific account.
     * @param {String} accountId 
     * @param {String} transactionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
     */
    this.accountsAccountIdTransactionsTransactionIdGETWithHttpInfo = function(accountId, transactionId) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling accountsAccountIdTransactionsTransactionIdGET");
      }

      // verify the required parameter 'transactionId' is set
      if (transactionId === undefined || transactionId === null) {
        throw new Error("Missing the required parameter 'transactionId' when calling accountsAccountIdTransactionsTransactionIdGET");
      }


      var pathParams = {
        'accountId': accountId,
        'transactionId': transactionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearerAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Transaction;

      return this.apiClient.callApi(
        '/accounts/{accountId}/transactions/{transactionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Transaction
     * Transaction for a specific account.
     * @param {String} accountId 
     * @param {String} transactionId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */
    this.accountsAccountIdTransactionsTransactionIdGET = function(accountId, transactionId) {
      return this.accountsAccountIdTransactionsTransactionIdGETWithHttpInfo(accountId, transactionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));