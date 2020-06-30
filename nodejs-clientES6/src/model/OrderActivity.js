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
import Execution from './Execution';

/**
* The OrderActivity model module.
* @module model/OrderActivity
* @version 0.1.4
*/
export default class OrderActivity {
    /**
    * Constructs a new <code>OrderActivity</code>.
    * @alias module:model/OrderActivity
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderActivity</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderActivity} obj Optional instance to populate.
    * @return {module:model/OrderActivity} The populated <code>OrderActivity</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderActivity();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Execution.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Execution} schema
    */
    'schema' = undefined;




}