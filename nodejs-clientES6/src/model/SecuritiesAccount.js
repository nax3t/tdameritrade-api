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
import ModelObject from './ModelObject';

/**
* The SecuritiesAccount model module.
* @module model/SecuritiesAccount
* @version 0.1.4
*/
export default class SecuritiesAccount {
    /**
    * Constructs a new <code>SecuritiesAccount</code>.
    * @alias module:model/SecuritiesAccount
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SecuritiesAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecuritiesAccount} obj Optional instance to populate.
    * @return {module:model/SecuritiesAccount} The populated <code>SecuritiesAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecuritiesAccount();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], ModelObject);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ModelObject} schema
    */
    'schema' = undefined;




}
