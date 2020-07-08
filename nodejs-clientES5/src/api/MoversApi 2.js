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
    define(['ApiClient', 'model/EASObject', 'model/Mover'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EASObject'), require('../model/Mover'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.MoversApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.EASObject, root.GitChrisQueen_TDA_JS.Mover);
  }
}(this, function(ApiClient, EASObject, Mover) {
  'use strict';

  /**
   * Movers service.
   * @module api/MoversApi
   * @version 0.1.4
   */

  /**
   * Constructs a new MoversApi. 
   * @alias module:api/MoversApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get price history for a symbol
     * @param {String} index 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @param {module:model/String} opts.direction 
     * @param {module:model/String} opts.change 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Mover} and HTTP response
     */
    this.marketdataIndexMoversGETWithHttpInfo = function(index, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'index' is set
      if (index === undefined || index === null) {
        throw new Error("Missing the required parameter 'index' when calling marketdataIndexMoversGET");
      }


      var pathParams = {
        'index': index
      };
      var queryParams = {
        'apikey': opts['apikey'],
        'direction': opts['direction'],
        'change': opts['change'],
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
      var returnType = Mover;

      return this.apiClient.callApi(
        '/marketdata/{index}/movers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get price history for a symbol
     * @param {String} index 
     * @param {Object} opts Optional parameters
     * @param {String} opts.apikey 
     * @param {module:model/String} opts.direction 
     * @param {module:model/String} opts.change 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Mover}
     */
    this.marketdataIndexMoversGET = function(index, opts) {
      return this.marketdataIndexMoversGETWithHttpInfo(index, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
