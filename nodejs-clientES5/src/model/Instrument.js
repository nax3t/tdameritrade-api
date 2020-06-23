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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.Instrument = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Instrument model module.
   * @module model/Instrument
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>Instrument</code>.
   * @alias module:model/Instrument
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Instrument</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Instrument} obj Optional instance to populate.
   * @return {module:model/Instrument} The populated <code>Instrument</code> instance.
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
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
    }
    return obj;
  }

  /**
   * @member {module:model/Instrument.AssetTypeEnum} assetType
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
     * value: "FOREX"
     * @const
     */
    FOREX: "FOREX",

    /**
     * value: "FUTURE"
     * @const
     */
    FUTURE: "FUTURE",

    /**
     * value: "FUTURE_OPTION"
     * @const
     */
    FUTURE_OPTION: "FUTURE_OPTION",

    /**
     * value: "INDEX"
     * @const
     */
    INDEX: "INDEX",

    /**
     * value: "INDICATOR"
     * @const
     */
    INDICATOR: "INDICATOR",

    /**
     * value: "MUTUAL_FUND"
     * @const
     */
    MUTUAL_FUND: "MUTUAL_FUND",

    /**
     * value: "OPTION"
     * @const
     */
    OPTION: "OPTION",

    /**
     * value: "UNKNOWN"
     * @const
     */
    UNKNOWN: "UNKNOWN"
  };

  return exports;

}));
