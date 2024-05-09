
declare module "model/RFIDElement" {
    /**
     * The RFIDElement model module.
     * @module model/RFIDElement
     * @version 1.0.0
     */
    export class RFIDElement {
        /**
         * Constructs a <code>RFIDElement</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/RFIDElement} obj Optional instance to populate.
         * @return {module:model/RFIDElement} The populated <code>RFIDElement</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>RFIDElement</code>.
         * RFID tag data structure (as per IATA Recommended Practice 1740c)
         * @alias module:model/RFIDElement
         * @class
         * @param objectKey {String} RFID Object Identfier (e.g. [1 0 15961 12] 1..127)
         */
        constructor(objectKey: string);
        objectKey: string;
        /**
         * RFID tag data in binary format
         * @member {Blob} binaryData
         */
        binaryData: any;
        /**
         * RFID tag data as a normal string
         * @member {String} stringData
         */
        stringData: any;
    }
}
