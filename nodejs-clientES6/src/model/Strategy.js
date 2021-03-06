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
* Enum class Strategy.
* @enum {}
* @readonly
*/
export default class Strategy {
        /**
         * value: "SINGLE"
         * @const
         */
        SINGLE = "SINGLE";

        /**
         * value: "ANALYTICAL"
         * @const
         */
        ANALYTICAL = "ANALYTICAL";

        /**
         * value: "COVERED"
         * @const
         */
        COVERED = "COVERED";

        /**
         * value: "VERTICAL"
         * @const
         */
        VERTICAL = "VERTICAL";

        /**
         * value: "CALENDAR"
         * @const
         */
        CALENDAR = "CALENDAR";

        /**
         * value: "STRANGLE"
         * @const
         */
        STRANGLE = "STRANGLE";

        /**
         * value: "STRADDLE"
         * @const
         */
        STRADDLE = "STRADDLE";

        /**
         * value: "BUTTERFLY"
         * @const
         */
        BUTTERFLY = "BUTTERFLY";

        /**
         * value: "CONDOR"
         * @const
         */
        CONDOR = "CONDOR";

        /**
         * value: "DIAGONAL"
         * @const
         */
        DIAGONAL = "DIAGONAL";

        /**
         * value: "COLLAR"
         * @const
         */
        COLLAR = "COLLAR";

        /**
         * value: "ROLL"
         * @const
         */
        ROLL = "ROLL";


    /**
    * Returns a <code>Strategy</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Strategy} The enum <code>Strategy</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
