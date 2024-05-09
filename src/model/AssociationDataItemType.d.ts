
declare module "model/AssociationDataItemType" {
    /**
     * The AssociationDataItemType model module.
     * @module model/AssociationDataItemType
     * @version 1.0.0
     */
    export class AssociationDataItemType {
        /**
         * Constructs a <code>AssociationDataItemType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/AssociationDataItemType} obj Optional instance to populate.
         * @return {module:model/AssociationDataItemType} The populated <code>AssociationDataItemType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>AssociationDataItemType</code>.
         * to be documented!
         * @alias module:model/AssociationDataItemType
         * @class
         * @param associationDataTag {String}
         */
        constructor(associationDataTag: string);
        associationDataTag: string;
        /**
         * @member {Blob} data
         */
        data: any;
    }
}
