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
import PositionsInner from './PositionsInner';

/**
* The Positions model module.
* @module model/Positions
* @version 0.1.4
*/
export default class Positions extends Array {
    /**
    * Constructs a new <code>Positions</code>.
    * @alias module:model/Positions
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>Positions</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Positions} obj Optional instance to populate.
    * @return {module:model/Positions} The populated <code>Positions</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Positions();
            ApiClient.constructFromObject(data, obj, 'PositionsInner');
            
            
        }
        return obj;
    }





}
