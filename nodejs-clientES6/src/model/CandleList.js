/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CandleListCandles from './CandleListCandles';

/**
* The CandleList model module.
* @module model/CandleList
* @version 0.1.3
*/
export default class CandleList {
    /**
    * Constructs a new <code>CandleList</code>.
    * List of Candles
    * @alias module:model/CandleList
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CandleList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CandleList} obj Optional instance to populate.
    * @return {module:model/CandleList} The populated <code>CandleList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CandleList();
                        
            
            if (data.hasOwnProperty('candles')) {
                obj['candles'] = ApiClient.convertToType(data['candles'], [CandleListCandles]);
            }
            if (data.hasOwnProperty('empty')) {
                obj['empty'] = ApiClient.convertToType(data['empty'], 'Boolean');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/CandleListCandles>} candles
    */
    'candles' = undefined;
    /**
    * @member {Boolean} empty
    */
    'empty' = undefined;
    /**
    * Symbol
    * @member {String} symbol
    */
    'symbol' = undefined;




}