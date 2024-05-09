
declare module "model/GPDataItemType" {
    /**
     * The GPDataItemType model module.
     * @module model/GPDataItemType
     * @version 1.0.0
     */
    export class GPDataItemType {
        /**
         * Constructs a <code>GPDataItemType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/GPDataItemType} obj Optional instance to populate.
         * @return {module:model/GPDataItemType} The populated <code>GPDataItemType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>GPDataItemType</code>.
         * General Purpose Data Item (name-value pair)
         * @alias module:model/GPDataItemType
         * @class
         * @param name {String} The name of this specific data item.
         * @param value {String} Individual association data item, exclusively maintained by and meaningful only to the client.
         */
        constructor(name: string, value: string);
        name: string;
        value: string;
    }
}
