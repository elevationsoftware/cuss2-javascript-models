
declare module "model/PassengerDataTypeAssociationDataList" {
    /**
     * The PassengerDataTypeAssociationDataList model module.
     * @module model/PassengerDataTypeAssociationDataList
     * @version 1.0.0
     */
    export class PassengerDataTypeAssociationDataList {
        /**
         * Constructs a <code>PassengerDataTypeAssociationDataList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerDataTypeAssociationDataList} obj Optional instance to populate.
         * @return {module:model/PassengerDataTypeAssociationDataList} The populated <code>PassengerDataTypeAssociationDataList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Individual association data item, exclusively maintained by and meaningful only to the client.
         * @member {Array.<module:model/AssociationDataItemType>} associationDataItem
         */
        associationDataItem: any;
    }
}
