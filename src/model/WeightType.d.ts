
declare module "model/WeightType" {
    /**
     * The WeightType model module.
     * @module model/WeightType
     * @version 1.0.0
     */
    export class WeightType {
        /**
         * Constructs a <code>WeightType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/WeightType} obj Optional instance to populate.
         * @return {module:model/WeightType} The populated <code>WeightType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>WeightType</code>.
         * Provide object weight measurements
         * @alias module:model/WeightType
         * @class
         * @param weight {Number} Weight of the object, in grams
         * @param stable {Boolean} Indicates if the measurement is stable
         */
        constructor(weight: number, stable: boolean);
        weight: number;
        stable: boolean;
        /**
         * @member {module:model/AlibiType} alibi
         */
        alibi: any;
        /**
         * @member {module:model/ExtendedWeightType} extendedWeight
         */
        extendedWeight: any;
    }
}
