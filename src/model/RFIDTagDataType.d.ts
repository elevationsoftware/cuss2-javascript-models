
declare module "model/RFIDTagDataType" {
    /**
     * The RFIDTagDataType model module.
     * @module model/RFIDTagDataType
     * @version 1.0.0
     */
    export class RFIDTagDataType {
        /**
         * Constructs a <code>RFIDTagDataType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/RFIDTagDataType} obj Optional instance to populate.
         * @return {module:model/RFIDTagDataType} The populated <code>RFIDTagDataType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>RFIDTagDataType</code>.
         * RFID tag data element list
         * @alias module:model/RFIDTagDataType
         * @class
         * @param id {String} RFID Transponder Identifier
         */
        constructor(id: string);
        id: string;
        /**
         * @member {Array.<module:model/RFIDElement>} rfidElements
         */
        rfidElements: any;
    }
}
