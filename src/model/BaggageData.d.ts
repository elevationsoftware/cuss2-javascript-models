
declare module "model/BaggageData" {
    /**
     * The BaggageData model module.
     * @module model/BaggageData
     * @version 1.0.0
     */
    export class BaggageData {
        /**
         * Constructs a <code>BaggageData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BaggageData} obj Optional instance to populate.
         * @return {module:model/BaggageData} The populated <code>BaggageData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/BaggageDataBaggageMeasurements} baggageMeasurements
         */
        baggageMeasurements: any;
        /**
         * @member {module:model/BaggageDataBarcodeTagList} barcodeTagList
         */
        barcodeTagList: any;
        /**
         * @member {module:model/BaggageDataRfidTagList} rfidTagList
         */
        rfidTagList: any;
        /**
         * IATA RP1745 Baggage Source Message (BSM) values containing at least the  following elements: .V, .F and .N. (for components supporting DS_TYPES_RP1745)
         * @member {String} bsmMessage
         */
        bsmMessage: any;
        /**
         * @member {module:model/MessageCodes} baggageError
         */
        baggageError: any;
    }
}
