
declare module "model/DimensionType" {
    /**
     * The DimensionType model module.
     * @module model/DimensionType
     * @version 1.0.0
     */
    export class DimensionType {
        /**
         * Constructs a <code>DimensionType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/DimensionType} obj Optional instance to populate.
         * @return {module:model/DimensionType} The populated <code>DimensionType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>DimensionType</code>.
         * Provide object dimension measurements
         * @alias module:model/DimensionType
         * @class
         * @param stable {Boolean} Indicates if the measurement is stable
         */
        constructor(stable: boolean);
        stable: boolean;
        /**
         * @member {module:model/AlibiType} alibi
         */
        alibi: any;
        /**
         * Height of the object, in centimetres (cm)
         * @member {Number} height
         */
        height: any;
        /**
         * Length of the object, in centimetres (cm)
         * @member {Number} length
         */
        length: any;
        /**
         * Width of the object, in centimetres (cm)
         * @member {Number} width
         */
        width: any;
    }
}
