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
import Instrument from './Instrument';

/**
* The OrderGetInstrument model module.
* @module model/OrderGetInstrument
* @version 0.1.4
*/
export default class OrderGetInstrument {
    /**
    * Constructs a new <code>OrderGetInstrument</code>.
    * @alias module:model/OrderGetInstrument
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>OrderGetInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/OrderGetInstrument} obj Optional instance to populate.
    * @return {module:model/OrderGetInstrument} The populated <code>OrderGetInstrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderGetInstrument();
                        
            
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = Instrument.constructFromObject(data['schema']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Instrument} schema
    */
    'schema' = undefined;




}
