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
import PutCall from './PutCall';

/**
* The OptionChainOptionPutCall model module.
* @module model/OptionChainOptionPutCall
* @version 0.1.4
*/
export default class OptionChainOptionPutCall {
    /**
    * Constructs a new <code>OptionChainOptionPutCall</code>.
    * @alias module:model/OptionChainOptionPutCall
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OptionChainOptionPutCall</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OptionChainOptionPutCall} obj Optional instance to populate.
    * @return {module:model/OptionChainOptionPutCall} The populated <code>OptionChainOptionPutCall</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionChainOptionPutCall();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = PutCall.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/PutCall} schema
    */
    'schema' = undefined;




}
