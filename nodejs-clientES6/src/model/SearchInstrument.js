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
* The SearchInstrument model module.
* @module model/SearchInstrument
* @version 0.1.4
*/
export default class SearchInstrument {
    /**
    * Constructs a new <code>SearchInstrument</code>.
    * @alias module:model/SearchInstrument
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SearchInstrument</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SearchInstrument} obj Optional instance to populate.
    * @return {module:model/SearchInstrument} The populated <code>SearchInstrument</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchInstrument();
                        
            
            if (data.hasOwnProperty('cusip')) {
                obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
            }
            if (data.hasOwnProperty('assetType')) {
                obj['assetType'] = ApiClient.convertToType(data['assetType'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} cusip
    */
    'cusip' = undefined;
    /**
    * @member {String} symbol
    */
    'symbol' = undefined;
    /**
    * @member {String} description
    */
    'description' = undefined;
    /**
    * @member {String} exchange
    */
    'exchange' = undefined;
    /**
    * @member {module:model/SearchInstrument.AssetTypeEnum} assetType
    */
    'assetType' = undefined;



    /**
    * Allowed values for the <code>assetType</code> property.
    * @enum {String}
    * @readonly
    */
    static AssetTypeEnum = {
        /**
         * value: "EQUITY"
         * @const
         */
        "EQUITY": "EQUITY",
        /**
         * value: "ETF"
         * @const
         */
        "ETF": "ETF",
        /**
         * value: "FOREX"
         * @const
         */
        "FOREX": "FOREX",
        /**
         * value: "FUTURE"
         * @const
         */
        "FUTURE": "FUTURE",
        /**
         * value: "FUTURE_OPTION"
         * @const
         */
        "FUTURE_OPTION": "FUTURE_OPTION",
        /**
         * value: "INDEX"
         * @const
         */
        "INDEX": "INDEX",
        /**
         * value: "INDICATOR"
         * @const
         */
        "INDICATOR": "INDICATOR",
        /**
         * value: "MUTUAL_FUND"
         * @const
         */
        "MUTUAL_FUND": "MUTUAL_FUND",
        /**
         * value: "OPTION"
         * @const
         */
        "OPTION": "OPTION",
        /**
         * value: "UNKNOWN"
         * @const
         */
        "UNKNOWN": "UNKNOWN"    };

}
