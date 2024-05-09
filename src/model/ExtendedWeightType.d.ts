
declare module "model/ExtendedWeightType" {
    /**
     * The ExtendedWeightType model module.
     * @module model/ExtendedWeightType
     * @version 1.0.0
     */
    export class ExtendedWeightType {
        /**
         * Constructs a <code>ExtendedWeightType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ExtendedWeightType} obj Optional instance to populate.
         * @return {module:model/ExtendedWeightType} The populated <code>ExtendedWeightType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ExtendedWeightType</code>.
         * Data acquired for a single object on the bag measurement device
         * @alias module:model/ExtendedWeightType
         * @class
         * @param grossWeight {Number} Summary of weights, in grams (tub + baggage object)
         * @param netWeight {Number} Weight of the baggage object, in grams
         * @param tareWeight {Number} Weight of an optional tub, in grams
         * @param tubDetected {Boolean} Indicates whether a tub was detected or not.
         */
        constructor(grossWeight: number, netWeight: number, tareWeight: number, tubDetected: boolean);
        grossWeight: number;
        netWeight: number;
        tareWeight: number;
        tubDetected: boolean;
    }
}
