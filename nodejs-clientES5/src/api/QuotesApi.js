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
    define(['ApiClient', 'model/ErrorObject', 'model/GetQuoteResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorObject'), require('../model/GetQuoteResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.QuotesApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.ErrorObject, root.GitChrisQueen_TDA_JS.GetQuoteResponse);
  }
}(this, function(ApiClient, ErrorObject, GetQuoteResponse) {
  'use strict';

  /**
   * Quotes service.
   * @module api/QuotesApi
   * @version 0.1.4
   */

  /**
   * Constructs a new QuotesApi. 
   * @alias module:api/QuotesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get Quotes
     * Get quote for one or more symbols
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @param {String} opts.symbol 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetQuoteResponse} and HTTP response
     */
    this.marketdataQuotesGETWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apikey': opts['apikey'],
        'symbol': opts['symbol'],
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
      var returnType = GetQuoteResponse;

      return this.apiClient.callApi(
        '/marketdata/quotes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Quotes
     * Get quote for one or more symbols
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @param {String} opts.symbol 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetQuoteResponse}
     */
    this.marketdataQuotesGET = function(opts) {
      return this.marketdataQuotesGETWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Quote
     * Get quote for a symbol
     * @param {String} symbol 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetQuoteResponse} and HTTP response
     */
    this.marketdataSymbolQuotesGETWithHttpInfo = function(symbol, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling marketdataSymbolQuotesGET");
      }


      var pathParams = {
        'symbol': symbol
      };
      var queryParams = {
        'apikey': opts['apikey'],
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
      var returnType = GetQuoteResponse;

      return this.apiClient.callApi(
        '/marketdata/{symbol}/quotes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Quote
     * Get quote for a symbol
     * @param {String} symbol 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetQuoteResponse}
     */
    this.marketdataSymbolQuotesGET = function(symbol, opts) {
      return this.marketdataSymbolQuotesGETWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
