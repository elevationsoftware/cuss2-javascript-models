
declare module "model/DataRecordList" {
    /**
     * The DataRecordList model module.
     * @module model/DataRecordList
     * @version 1.0.0
     */
    export class DataRecordList extends Array<any> {
        /**
         * Constructs a <code>DataRecordList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/DataRecordList} obj Optional instance to populate.
         * @return {module:model/DataRecordList} The populated <code>DataRecordList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>DataRecordList</code>.
         * @alias module:model/DataRecordList
         * @class
         * @extends Array
         */
        constructor();
    }
}
