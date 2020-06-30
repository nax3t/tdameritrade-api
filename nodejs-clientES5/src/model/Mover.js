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
    root.GitChrisQueen_TDA_JS.Mover = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Mover model module.
   * @module model/Mover
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>Mover</code>.
   * @alias module:model/Mover
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Mover</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Mover} obj Optional instance to populate.
   * @return {module:model/Mover} The populated <code>Mover</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('change'))
        obj.change = ApiClient.convertToType(data['change'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('direction'))
        obj.direction = ApiClient.convertToType(data['direction'], 'String');
      if (data.hasOwnProperty('last'))
        obj.last = ApiClient.convertToType(data['last'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('totalVolume'))
        obj.totalVolume = ApiClient.convertToType(data['totalVolume'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} change
   */
  exports.prototype.change = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {module:model/Mover.DirectionEnum} direction
   */
  exports.prototype.direction = undefined;

  /**
   * @member {Number} last
   */
  exports.prototype.last = undefined;

  /**
   * @member {String} symbol
   */
  exports.prototype.symbol = undefined;

  /**
   * @member {Number} totalVolume
   */
  exports.prototype.totalVolume = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "up"
     * @const
     */
    up: "up",

    /**
     * value: "down"
     * @const
     */
    down: "down"
  };

  return exports;

}));