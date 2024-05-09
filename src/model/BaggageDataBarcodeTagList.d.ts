
declare module "model/BaggageDataBarcodeTagList" {
    /**
     * The BaggageDataBarcodeTagList model module.
     * @module model/BaggageDataBarcodeTagList
     * @version 1.0.0
     */
    export class BaggageDataBarcodeTagList {
        /**
         * Constructs a <code>BaggageDataBarcodeTagList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BaggageDataBarcodeTagList} obj Optional instance to populate.
         * @return {module:model/BaggageDataBarcodeTagList} The populated <code>BaggageDataBarcodeTagList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Array.<module:model/BarcodeTagDataType>} lpnBarcodeTag
         */
        lpnBarcodeTag: any;
        /**
         * @member {Array.<String>} otherBarcodeTag
         */
        otherBarcodeTag: any;
    }
}
