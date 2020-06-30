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
import WatchListWatchlistItems from './WatchListWatchlistItems';

/**
* The WatchList model module.
* @module model/WatchList
* @version 0.1.4
*/
export default class WatchList {
    /**
    * Constructs a new <code>WatchList</code>.
    * @alias module:model/WatchList
    * @class
    * @param watchlistItems {Array.<module:model/WatchListWatchlistItems>} 
    */

    constructor(watchlistItems) {
        
        
        this['watchlistItems'] = watchlistItems;
        
    }

    /**
    * Constructs a <code>WatchList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WatchList} obj Optional instance to populate.
    * @return {module:model/WatchList} The populated <code>WatchList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WatchList();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('watchlistId')) {
                obj['watchlistId'] = ApiClient.convertToType(data['watchlistId'], 'String');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('watchlistItems')) {
                obj['watchlistItems'] = ApiClient.convertToType(data['watchlistItems'], [WatchListWatchlistItems]);
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} watchlistId
    */
    'watchlistId' = undefined;
    /**
    * @member {String} accountId
    */
    'accountId' = undefined;
    /**
    * @member {module:model/WatchList.StatusEnum} status
    */
    'status' = undefined;
    /**
    * @member {Array.<module:model/WatchListWatchlistItems>} watchlistItems
    */
    'watchlistItems' = undefined;



    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
        /**
         * value: "UNCHANGED"
         * @const
         */
        "UNCHANGED": "UNCHANGED",
        /**
         * value: "CREATED"
         * @const
         */
        "CREATED": "CREATED",
        /**
         * value: "UPDATED"
         * @const
         */
        "UPDATED": "UPDATED",
        /**
         * value: "DELETED"
         * @const
         */
        "DELETED": "DELETED"    };

}
