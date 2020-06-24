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
    define(['ApiClient', 'model/FundamentalFundamental'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FundamentalFundamental'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.Fundamental = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.FundamentalFundamental);
  }
}(this, function(ApiClient, FundamentalFundamental) {
  'use strict';

  /**
   * The Fundamental model module.
   * @module model/Fundamental
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>Fundamental</code>.
   * @alias module:model/Fundamental
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Fundamental</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fundamental} obj Optional instance to populate.
   * @return {module:model/Fundamental} The populated <code>Fundamental</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('assetType'))
        obj.assetType = ApiClient.convertToType(data['assetType'], 'String');
      if (data.hasOwnProperty('cusip'))
        obj.cusip = ApiClient.convertToType(data['cusip'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('fundamental'))
        obj.fundamental = FundamentalFundamental.constructFromObject(data['fundamental']);
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/Fundamental.AssetTypeEnum} assetType
   */
  exports.prototype.assetType = undefined;

  /**
   * @member {String} cusip
   */
  exports.prototype.cusip = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * @member {module:model/FundamentalFundamental} fundamental
   */
  exports.prototype.fundamental = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;


  /**
   * Allowed values for the <code>assetType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AssetTypeEnum = {
    /**
     * value: "EQUITY"
     * @const
     */
    EQUITY: "EQUITY",

    /**
     * value: "ETF"
     * @const
     */
    ETF: "ETF",

    /**
     * value: "MUTUAL_FUND"
     * @const
     */
    MUTUAL_FUND: "MUTUAL_FUND",

    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN"
  };

  return exports;

}));
