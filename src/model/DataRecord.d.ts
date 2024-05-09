
declare module "model/DataRecord" {
    /**
     * The DataRecord model module.
     * @module model/DataRecord
     * @version 1.0.0
     */
    export class DataRecord {
        /**
         * Constructs a <code>DataRecord</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/DataRecord} obj Optional instance to populate.
         * @return {module:model/DataRecord} The populated <code>DataRecord</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>DataRecord</code>.
         * @alias module:model/DataRecord
         * @class
         * @param dsTypes {Array.<module:model/CUSSDataTypes>} The type(s) of data in this data record.
         * @param data {Blob} The data itself in base64 coding, which also can be NULL, null, NIL, nil,...
         */
        constructor(dsTypes: Array<NodeModule>, data: Blob);
        dsTypes: NodeModule[];
        data: Blob;
        /**
         * @member {module:model/DataStatus} dataStatus
         */
        dataStatus: any;
    }
}
