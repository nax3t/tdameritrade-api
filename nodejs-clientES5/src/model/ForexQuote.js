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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.ForexQuote = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ForexQuote model module.
   * @module model/ForexQuote
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>ForexQuote</code>.
   * @alias module:model/ForexQuote
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ForexQuote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ForexQuote} obj Optional instance to populate.
   * @return {module:model/ForexQuote} The populated <code>ForexQuote</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('52WkHighInDouble'))
        obj._52WkHighInDouble = ApiClient.convertToType(data['52WkHighInDouble'], 'Number');
      if (data.hasOwnProperty('52WkLowInDouble'))
        obj._52WkLowInDouble = ApiClient.convertToType(data['52WkLowInDouble'], 'Number');
      if (data.hasOwnProperty('askPriceInDouble'))
        obj.askPriceInDouble = ApiClient.convertToType(data['askPriceInDouble'], 'Number');
      if (data.hasOwnProperty('bidPriceInDouble'))
        obj.bidPriceInDouble = ApiClient.convertToType(data['bidPriceInDouble'], 'Number');
      if (data.hasOwnProperty('changeInDouble'))
        obj.changeInDouble = ApiClient.convertToType(data['changeInDouble'], 'Number');
      if (data.hasOwnProperty('closePriceInDouble'))
        obj.closePriceInDouble = ApiClient.convertToType(data['closePriceInDouble'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('digits'))
        obj.digits = ApiClient.convertToType(data['digits'], 'Number');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('exchangeName'))
        obj.exchangeName = ApiClient.convertToType(data['exchangeName'], 'String');
      if (data.hasOwnProperty('highPriceInDouble'))
        obj.highPriceInDouble = ApiClient.convertToType(data['highPriceInDouble'], 'Number');
      if (data.hasOwnProperty('isTradable'))
        obj.isTradable = ApiClient.convertToType(data['isTradable'], 'Boolean');
      if (data.hasOwnProperty('lastPriceInDouble'))
        obj.lastPriceInDouble = ApiClient.convertToType(data['lastPriceInDouble'], 'Number');
      if (data.hasOwnProperty('lowPriceInDouble'))
        obj.lowPriceInDouble = ApiClient.convertToType(data['lowPriceInDouble'], 'Number');
      if (data.hasOwnProperty('mark'))
        obj.mark = ApiClient.convertToType(data['mark'], 'Number');
      if (data.hasOwnProperty('marketMaker'))
        obj.marketMaker = ApiClient.convertToType(data['marketMaker'], 'String');
      if (data.hasOwnProperty('openPriceInDouble'))
        obj.openPriceInDouble = ApiClient.convertToType(data['openPriceInDouble'], 'Number');
      if (data.hasOwnProperty('percentChange'))
        obj.percentChange = ApiClient.convertToType(data['percentChange'], 'Number');
      if (data.hasOwnProperty('product'))
        obj.product = ApiClient.convertToType(data['product'], 'String');
      if (data.hasOwnProperty('securityStatus'))
        obj.securityStatus = ApiClient.convertToType(data['securityStatus'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('tick'))
        obj.tick = ApiClient.convertToType(data['tick'], 'Number');
      if (data.hasOwnProperty('tickAmount'))
        obj.tickAmount = ApiClient.convertToType(data['tickAmount'], 'Number');
      if (data.hasOwnProperty('tradingHours'))
        obj.tradingHours = ApiClient.convertToType(data['tradingHours'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} _52WkHighInDouble
   */
  exports.prototype._52WkHighInDouble = undefined;

  /**
   * @member {Number} _52WkLowInDouble
   */
  exports.prototype._52WkLowInDouble = undefined;

  /**
   * @member {Number} askPriceInDouble
   */
  exports.prototype.askPriceInDouble = undefined;

  /**
   * @member {Number} bidPriceInDouble
   */
  exports.prototype.bidPriceInDouble = undefined;

  /**
   * @member {Number} changeInDouble
   */
  exports.prototype.changeInDouble = undefined;

  /**
   * @member {Number} closePriceInDouble
   */
  exports.prototype.closePriceInDouble = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Number} digits
   */
  exports.prototype.digits = undefined;

  /**
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * @member {String} exchangeName
   */
  exports.prototype.exchangeName = undefined;

  /**
   * @member {Number} highPriceInDouble
   */
  exports.prototype.highPriceInDouble = undefined;

  /**
   * @member {Boolean} isTradable
   */
  exports.prototype.isTradable = undefined;

  /**
   * @member {Number} lastPriceInDouble
   */
  exports.prototype.lastPriceInDouble = undefined;

  /**
   * @member {Number} lowPriceInDouble
   */
  exports.prototype.lowPriceInDouble = undefined;

  /**
   * @member {Number} mark
   */
  exports.prototype.mark = undefined;

  /**
   * @member {String} marketMaker
   */
  exports.prototype.marketMaker = undefined;

  /**
   * @member {Number} openPriceInDouble
   */
  exports.prototype.openPriceInDouble = undefined;

  /**
   * @member {Number} percentChange
   */
  exports.prototype.percentChange = undefined;

  /**
   * @member {String} product
   */
  exports.prototype.product = undefined;

  /**
   * @member {String} securityStatus
   */
  exports.prototype.securityStatus = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {Number} tick
   */
  exports.prototype.tick = undefined;

  /**
   * @member {Number} tickAmount
   */
  exports.prototype.tickAmount = undefined;

  /**
   * @member {String} tradingHours
   */
  exports.prototype.tradingHours = undefined;

  return exports;

}));