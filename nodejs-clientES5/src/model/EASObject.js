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
    root.GitChrisQueen_TDA_JS.EASObject = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EASObject model module.
   * @module model/EASObject
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>EASObject</code>.
   * @alias module:model/EASObject
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>EASObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EASObject} obj Optional instance to populate.
   * @return {module:model/EASObject} The populated <code>EASObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_token'))
        obj.access_token = ApiClient.convertToType(data['access_token'], 'String');
      if (data.hasOwnProperty('expires_in'))
        obj.expires_in = ApiClient.convertToType(data['expires_in'], 'Number');
      if (data.hasOwnProperty('refresh_token'))
        obj.refresh_token = ApiClient.convertToType(data['refresh_token'], 'String');
      if (data.hasOwnProperty('refresh_token_expires_in'))
        obj.refresh_token_expires_in = ApiClient.convertToType(data['refresh_token_expires_in'], 'Number');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('token_type'))
        obj.token_type = ApiClient.convertToType(data['token_type'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} access_token
   */
  exports.prototype.access_token = undefined;

  /**
   * @member {Number} expires_in
   */
  exports.prototype.expires_in = undefined;

  /**
   * @member {String} refresh_token
   */
  exports.prototype.refresh_token = undefined;

  /**
   * @member {Number} refresh_token_expires_in
   */
  exports.prototype.refresh_token_expires_in = undefined;

  /**
   * @member {String} scope
   */
  exports.prototype.scope = undefined;

  /**
   * @member {String} token_type
   */
  exports.prototype.token_type = undefined;

  return exports;

}));
