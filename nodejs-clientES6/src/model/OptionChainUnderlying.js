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
import Underlying from './Underlying';

/**
* The OptionChainUnderlying model module.
* @module model/OptionChainUnderlying
* @version 0.1.4
*/
export default class OptionChainUnderlying {
    /**
    * Constructs a new <code>OptionChainUnderlying</code>.
    * @alias module:model/OptionChainUnderlying
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OptionChainUnderlying</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OptionChainUnderlying} obj Optional instance to populate.
    * @return {module:model/OptionChainUnderlying} The populated <code>OptionChainUnderlying</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionChainUnderlying();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Underlying.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Underlying} schema
    */
    'schema' = undefined;




}