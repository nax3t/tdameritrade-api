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
import OptionDeliverableInner from './OptionDeliverableInner';

/**
* The OptionDeliverable model module.
* @module model/OptionDeliverable
* @version 0.1.4
*/
export default class OptionDeliverable extends Array {
    /**
    * Constructs a new <code>OptionDeliverable</code>.
    * @alias module:model/OptionDeliverable
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>OptionDeliverable</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OptionDeliverable} obj Optional instance to populate.
    * @return {module:model/OptionDeliverable} The populated <code>OptionDeliverable</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionDeliverable();
            ApiClient.constructFromObject(data, obj, 'OptionDeliverableInner');
            
            
        }
        return obj;
    }





}
