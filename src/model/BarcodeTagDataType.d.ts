
declare module "model/BarcodeTagDataType" {
    /**
     * The BarcodeTagDataType model module.
     * @module model/BarcodeTagDataType
     * @version 1.0.0
     */
    export class BarcodeTagDataType {
        /**
         * Constructs a <code>BarcodeTagDataType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BarcodeTagDataType} obj Optional instance to populate.
         * @return {module:model/BarcodeTagDataType} The populated <code>BarcodeTagDataType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BarcodeTagDataType</code>.
         * IATA License Plate Number (10 digits)
         * @alias module:model/BarcodeTagDataType
         * @class
         * @param lpnNumber {String}
         */
        constructor(lpnNumber: string);
        lpnNumber: string;
    }
}
