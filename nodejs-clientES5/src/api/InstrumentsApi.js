/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
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
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.InstrumentsApi = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.InlineResponse200);
  }
}(this, function(ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Instruments service.
   * @module api/InstrumentsApi
   * @version 0.1.3
   */

  /**
   * Constructs a new InstrumentsApi. 
   * @alias module:api/InstrumentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Searh or retrieve instument data, including fundamental data
     * @param {String} Symbol Value to pass to the search. See projection description for more information.
     * @param {String} Projection The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.
     * @param {Object} opts Optional parameters
     * @param {String} opts.Apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.instrumentsGETWithHttpInfo = function(Symbol, Projection, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'Symbol' is set
      if (Symbol === undefined || Symbol === null) {
        throw new Error("Missing the required parameter 'Symbol' when calling instrumentsGET");
      }

      // verify the required parameter 'Projection' is set
      if (Projection === undefined || Projection === null) {
        throw new Error("Missing the required parameter 'Projection' when calling instrumentsGET");
      }


      var pathParams = {
      };
      var queryParams = {
        'apikey': opts['Apikey'],
        'symbol': Symbol,
        'projection': Projection,
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/instruments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Searh or retrieve instument data, including fundamental data
     * @param {String} Symbol Value to pass to the search. See projection description for more information.
     * @param {String} Projection The type of request: symbol-search: Retrieve instrument data of a specific symbol or cusip symbol-regex: Retrieve instrument data for all symbols matching regex. Example: symbol=XYZ.* will return all symbols beginning with XYZ desc-search: Retrieve instrument data for instruments whose description contains the word supplied. Example: symbol=FakeCompany will return all instruments with FakeCompany in the description. desc-regex: Search description with full regex support. Example: symbol=XYZ.[A-C] returns all instruments whose descriptions contain a word beginning with XYZ followed by a character A through C. fundamental: Returns fundamental data for a single instrument specified by exact symbol.
     * @param {Object} opts Optional parameters
     * @param {String} opts.Apikey Pass your OAuth User ID to make an unauthenticated request for delayed data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.instrumentsGET = function(Symbol, Projection, opts) {
      return this.instrumentsGETWithHttpInfo(Symbol, Projection, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));