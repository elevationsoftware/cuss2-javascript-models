
declare module "model/GPDataListType" {
    /**
     * The GPDataListType model module.
     * @module model/GPDataListType
     * @version 1.0.0
     */
    export class GPDataListType {
        /**
         * Constructs a <code>GPDataListType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/GPDataListType} obj Optional instance to populate.
         * @return {module:model/GPDataListType} The populated <code>GPDataListType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>GPDataListType</code>.
         * Passenger attribute association data managed by the client.
         * @alias module:model/GPDataListType
         * @class
         * @param gpDataItems {Array.<module:model/GPDataItemType>} Individual association data item, exclusively maintained by and meaningful only to the client.
         */
        constructor(gpDataItems: Array<NodeModule>);
        gpDataItems: NodeModule[];
    }
}
