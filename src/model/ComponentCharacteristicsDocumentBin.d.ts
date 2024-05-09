
declare module "model/ComponentCharacteristicsDocumentBin" {
    /**
     * The ComponentCharacteristicsDocumentBin model module.
     * @module model/ComponentCharacteristicsDocumentBin
     * @version 1.0.0
     */
    export class ComponentCharacteristicsDocumentBin {
        /**
         * Constructs a <code>ComponentCharacteristicsDocumentBin</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristicsDocumentBin} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristicsDocumentBin} The populated <code>ComponentCharacteristicsDocumentBin</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Describes the maximum number of documents a bin can hold.
         * @member {Number} binSize
         */
        binSize: any;
        /**
         * Shows the high threshold of the bin if appropriate sensor is installed.
         * @member {Number} allmostFullLevel
         */
        allmostFullLevel: any;
        /**
         * Shows the low threshold of the bin if appropriate sensor is installed.
         * @member {Number} allmostEmptyLevel
         */
        allmostEmptyLevel: any;
    }
}
