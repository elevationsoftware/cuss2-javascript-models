
declare module "model/Location" {
    /**
     * The Location model module.
     * @module model/Location
     * @version 1.0.0
     */
    export class Location {
        /**
         * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Location} obj Optional instance to populate.
         * @return {module:model/Location} The populated <code>Location</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * 3L code for the airport or city or any location.
         * @member {String} airportCode
         */
        airportCode: any;
        /**
         * Terminal name, if applicable.
         * @member {String} terminal
         */
        terminal: any;
        /**
         * Area name, if applicable.
         * @member {String} area
         */
        area: any;
        /**
         * Free form address, if applicable.
         * @member {String} address
         */
        address: any;
    }
}
