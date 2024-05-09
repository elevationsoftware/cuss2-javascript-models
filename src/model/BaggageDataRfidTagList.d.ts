
declare module "model/BaggageDataRfidTagList" {
    /**
     * The BaggageDataRfidTagList model module.
     * @module model/BaggageDataRfidTagList
     * @version 1.0.0
     */
    export class BaggageDataRfidTagList {
        /**
         * Constructs a <code>BaggageDataRfidTagList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BaggageDataRfidTagList} obj Optional instance to populate.
         * @return {module:model/BaggageDataRfidTagList} The populated <code>BaggageDataRfidTagList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BaggageDataRfidTagList</code>.
         * List of radio frequency measurement values (for components supporting DS_TYPES_ISO15961)
         * @alias module:model/BaggageDataRfidTagList
         * @class
         * @param rfidTag {Array.<module:model/RFIDTagDataType>}
         */
        constructor(rfidTag: Array<NodeModule>);
        rfidTag: NodeModule[];
    }
}
