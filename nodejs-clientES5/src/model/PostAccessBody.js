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
    root.GitChrisQueen_TDA_JS.PostAccessBody = factory(root.GitChrisQueen_TDA_JS.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PostAccessBody model module.
   * @module model/PostAccessBody
   * @version 0.1.3
   */

  /**
   * Constructs a new <code>PostAccessBody</code>.
   * Body Parmeers for the Post Access Token Endpoint
   * @alias module:model/PostAccessBody
   * @class
   * @param ClientId {Number} OAuth User ID of your application
   * @param GrantType {String} The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
   */
  var exports = function(ClientId, GrantType) {
    this.ClientId = ClientId;
    this.GrantType = GrantType;
  };

  /**
   * Constructs a <code>PostAccessBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostAccessBody} obj Optional instance to populate.
   * @return {module:model/PostAccessBody} The populated <code>PostAccessBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('access_type'))
        obj.AccessType = ApiClient.convertToType(data['access_type'], 'String');
      if (data.hasOwnProperty('client_id'))
        obj.ClientId = ApiClient.convertToType(data['client_id'], 'Number');
      if (data.hasOwnProperty('code'))
        obj.Code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('grant_type'))
        obj.GrantType = ApiClient.convertToType(data['grant_type'], 'String');
      if (data.hasOwnProperty('redirect_uri'))
        obj.RedirectUri = ApiClient.convertToType(data['redirect_uri'], 'String');
      if (data.hasOwnProperty('refresh_token'))
        obj.RefreshToken = ApiClient.convertToType(data['refresh_token'], 'String');
    }
    return obj;
  }

  /**
   * Set to offline to receive a refresh token on an authorization_code grant type request. Do not set to offline on a refresh_token grant type request.
   * @member {String} AccessType
   */
  exports.prototype.AccessType = undefined;

  /**
   * OAuth User ID of your application
   * @member {Number} ClientId
   */
  exports.prototype.ClientId = undefined;

  /**
   * Required if trying to use authorization code grant
   * @member {String} Code
   */
  exports.prototype.Code = undefined;

  /**
   * The grant type of the oAuth scheme. Possible values are authorization_code, refresh_token
   * @member {String} GrantType
   */
  exports.prototype.GrantType = undefined;

  /**
   * Required if trying to use authorization code grant
   * @member {String} RedirectUri
   */
  exports.prototype.RedirectUri = undefined;

  /**
   * Required if using refresh token grant
   * @member {String} RefreshToken
   */
  exports.prototype.RefreshToken = undefined;

  return exports;

}));