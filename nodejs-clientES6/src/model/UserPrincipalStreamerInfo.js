/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The UserPrincipalStreamerInfo model module.
* @module model/UserPrincipalStreamerInfo
* @version 0.1.4
*/
export default class UserPrincipalStreamerInfo {
    /**
    * Constructs a new <code>UserPrincipalStreamerInfo</code>.
    * @alias module:model/UserPrincipalStreamerInfo
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserPrincipalStreamerInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserPrincipalStreamerInfo} obj Optional instance to populate.
    * @return {module:model/UserPrincipalStreamerInfo} The populated <code>UserPrincipalStreamerInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserPrincipalStreamerInfo();
                        
            
            if (data.hasOwnProperty('streamerBinaryUrl')) {
                obj['streamerBinaryUrl'] = ApiClient.convertToType(data['streamerBinaryUrl'], 'String');
            }
            if (data.hasOwnProperty('streamerSocketUrl')) {
                obj['streamerSocketUrl'] = ApiClient.convertToType(data['streamerSocketUrl'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('tokenTimestamp')) {
                obj['tokenTimestamp'] = ApiClient.convertToType(data['tokenTimestamp'], 'Date');
            }
            if (data.hasOwnProperty('userGroup')) {
                obj['userGroup'] = ApiClient.convertToType(data['userGroup'], 'String');
            }
            if (data.hasOwnProperty('accessLevel')) {
                obj['accessLevel'] = ApiClient.convertToType(data['accessLevel'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} streamerBinaryUrl
    */
    'streamerBinaryUrl' = undefined;
    /**
    * @member {String} streamerSocketUrl
    */
    'streamerSocketUrl' = undefined;
    /**
    * @member {String} token
    */
    'token' = undefined;
    /**
    * @member {Date} tokenTimestamp
    */
    'tokenTimestamp' = undefined;
    /**
    * @member {String} userGroup
    */
    'userGroup' = undefined;
    /**
    * @member {String} accessLevel
    */
    'accessLevel' = undefined;
    /**
    * @member {String} acl
    */
    'acl' = undefined;
    /**
    * @member {String} appId
    */
    'appId' = undefined;




}