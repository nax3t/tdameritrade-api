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
    define(['ApiClient', 'model/UserPrincipalAccounts', 'model/UserPrincipalQuotes', 'model/UserPrincipalStreamerInfo', 'model/UserPrincipalStreamerSubscriptionKeys'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserPrincipalAccounts'), require('./UserPrincipalQuotes'), require('./UserPrincipalStreamerInfo'), require('./UserPrincipalStreamerSubscriptionKeys'));
  } else {
    // Browser globals (root is window)
    if (!root.GitChrisQueen_TDA_JS) {
      root.GitChrisQueen_TDA_JS = {};
    }
    root.GitChrisQueen_TDA_JS.UserPrincipal = factory(root.GitChrisQueen_TDA_JS.ApiClient, root.GitChrisQueen_TDA_JS.UserPrincipalAccounts, root.GitChrisQueen_TDA_JS.UserPrincipalQuotes, root.GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo, root.GitChrisQueen_TDA_JS.UserPrincipalStreamerSubscriptionKeys);
  }
}(this, function(ApiClient, UserPrincipalAccounts, UserPrincipalQuotes, UserPrincipalStreamerInfo, UserPrincipalStreamerSubscriptionKeys) {
  'use strict';

  /**
   * The UserPrincipal model module.
   * @module model/UserPrincipal
   * @version 0.1.4
   */

  /**
   * Constructs a new <code>UserPrincipal</code>.
   * @alias module:model/UserPrincipal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>UserPrincipal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserPrincipal} obj Optional instance to populate.
   * @return {module:model/UserPrincipal} The populated <code>UserPrincipal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accessLevel'))
        obj.accessLevel = ApiClient.convertToType(data['accessLevel'], 'String');
      if (data.hasOwnProperty('accounts'))
        obj.accounts = ApiClient.convertToType(data['accounts'], [UserPrincipalAccounts]);
      if (data.hasOwnProperty('authToken'))
        obj.authToken = ApiClient.convertToType(data['authToken'], 'String');
      if (data.hasOwnProperty('lastLoginTime'))
        obj.lastLoginTime = ApiClient.convertToType(data['lastLoginTime'], 'Date');
      if (data.hasOwnProperty('loginTime'))
        obj.loginTime = ApiClient.convertToType(data['loginTime'], 'Date');
      if (data.hasOwnProperty('primaryAccountId'))
        obj.primaryAccountId = ApiClient.convertToType(data['primaryAccountId'], 'String');
      if (data.hasOwnProperty('professionalStatus'))
        obj.professionalStatus = ApiClient.convertToType(data['professionalStatus'], 'String');
      if (data.hasOwnProperty('quotes'))
        obj.quotes = UserPrincipalQuotes.constructFromObject(data['quotes']);
      if (data.hasOwnProperty('stalePassword'))
        obj.stalePassword = ApiClient.convertToType(data['stalePassword'], 'Boolean');
      if (data.hasOwnProperty('streamerInfo'))
        obj.streamerInfo = UserPrincipalStreamerInfo.constructFromObject(data['streamerInfo']);
      if (data.hasOwnProperty('streamerSubscriptionKeys'))
        obj.streamerSubscriptionKeys = UserPrincipalStreamerSubscriptionKeys.constructFromObject(data['streamerSubscriptionKeys']);
      if (data.hasOwnProperty('tokenExpirationTime'))
        obj.tokenExpirationTime = ApiClient.convertToType(data['tokenExpirationTime'], 'Date');
      if (data.hasOwnProperty('userCdDomainId'))
        obj.userCdDomainId = ApiClient.convertToType(data['userCdDomainId'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} accessLevel
   */
  exports.prototype.accessLevel = undefined;

  /**
   * @member {Array.<module:model/UserPrincipalAccounts>} accounts
   */
  exports.prototype.accounts = undefined;

  /**
   * @member {String} authToken
   */
  exports.prototype.authToken = undefined;

  /**
   * @member {Date} lastLoginTime
   */
  exports.prototype.lastLoginTime = undefined;

  /**
   * @member {Date} loginTime
   */
  exports.prototype.loginTime = undefined;

  /**
   * @member {String} primaryAccountId
   */
  exports.prototype.primaryAccountId = undefined;

  /**
   * @member {module:model/UserPrincipal.ProfessionalStatusEnum} professionalStatus
   */
  exports.prototype.professionalStatus = undefined;

  /**
   * @member {module:model/UserPrincipalQuotes} quotes
   */
  exports.prototype.quotes = undefined;

  /**
   * @member {Boolean} stalePassword
   * @default false
   */
  exports.prototype.stalePassword = false;

  /**
   * @member {module:model/UserPrincipalStreamerInfo} streamerInfo
   */
  exports.prototype.streamerInfo = undefined;

  /**
   * @member {module:model/UserPrincipalStreamerSubscriptionKeys} streamerSubscriptionKeys
   */
  exports.prototype.streamerSubscriptionKeys = undefined;

  /**
   * @member {Date} tokenExpirationTime
   */
  exports.prototype.tokenExpirationTime = undefined;

  /**
   * @member {String} userCdDomainId
   */
  exports.prototype.userCdDomainId = undefined;

  /**
   * @member {String} userId
   */
  exports.prototype.userId = undefined;


  /**
   * Allowed values for the <code>professionalStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProfessionalStatusEnum = {
    /**
     * value: "PROFESSIONAL"
     * @const
     */
    PROFESSIONAL: "PROFESSIONAL",

    /**
     * value: "NON_PROFESSIONAL"
     * @const
     */
    NON_PROFESSIONAL: "NON_PROFESSIONAL",

    /**
     * value: "UNKNOWN_STATUS"
     * @const
     */
    UNKNOWN_STATUS: "UNKNOWN_STATUS"
  };

  return exports;

}));
