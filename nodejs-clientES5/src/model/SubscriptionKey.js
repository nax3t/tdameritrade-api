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
    define(['ApiClient', 'model/SubscriptionKeyKeys'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubscriptionKeyKeys'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.SubscriptionKey = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.SubscriptionKeyKeys);
  }
}(this, function(ApiClient, SubscriptionKeyKeys) {
  'use strict';

  /**
   * The SubscriptionKey model module.
   * @module model/SubscriptionKey
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>SubscriptionKey</code>.
   * @alias module:model/SubscriptionKey
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SubscriptionKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionKey} obj Optional instance to populate.
   * @return {module:model/SubscriptionKey} The populated <code>SubscriptionKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('keys'))
        obj.keys = ApiClient.convertToType(data['keys'], [SubscriptionKeyKeys]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SubscriptionKeyKeys>} keys
   */
  exports.prototype.keys = undefined;

  return exports;

}));
