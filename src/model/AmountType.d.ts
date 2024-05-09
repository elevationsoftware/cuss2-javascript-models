
declare module "model/AmountType" {
    /**
     * The AmountType model module.
     * @module model/AmountType
     * @version 1.0.0
     */
    export class AmountType {
        /**
         * Constructs a <code>AmountType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/AmountType} obj Optional instance to populate.
         * @return {module:model/AmountType} The populated <code>AmountType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>AmountType</code>.
         * Authorized financial elements (mandatory in response, not required in request).
         * @alias module:model/AmountType
         * @class
         * @param currencyCode {String} ISO 4217 (3-character alpha) currency code.
         * @param baseAmount {Number} Requested or authorized amount in units.subunits (arithmetic major units) format.
         */
        constructor(currencyCode: string, baseAmount: number);
        currencyCode: string;
        baseAmount: number;
    }
}
