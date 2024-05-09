
declare module "model/PlatformDataMetaEventClassification" {
    /**
     * The PlatformDataMetaEventClassification model module.
     * @module model/PlatformDataMetaEventClassification
     * @version 1.0.0
     */
    export class PlatformDataMetaEventClassification {
        /**
         * Constructs a <code>PlatformDataMetaEventClassification</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PlatformDataMetaEventClassification} obj Optional instance to populate.
         * @return {module:model/PlatformDataMetaEventClassification} The populated <code>PlatformDataMetaEventClassification</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/EventModes} eventMode
         */
        eventMode: any;
        /**
         * @member {module:model/EventTypes} eventType
         */
        eventType: any;
        /**
         * @member {module:model/EventCategories} eventCategory
         */
        eventCategory: any;
    }
}
