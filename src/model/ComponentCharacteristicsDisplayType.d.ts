
declare module "model/ComponentCharacteristicsDisplayType" {
    /**
     * The ComponentCharacteristicsDisplayType model module.
     * @module model/ComponentCharacteristicsDisplayType
     * @version 1.0.0
     */
    export class ComponentCharacteristicsDisplayType {
        /**
         * Constructs a <code>ComponentCharacteristicsDisplayType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristicsDisplayType} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristicsDisplayType} The populated <code>ComponentCharacteristicsDisplayType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Number} screenDiagonal
         */
        screenDiagonal: any;
        /**
         * @member {Array.<module:model/ScreenResolution>} resolutions
         */
        resolutions: any;
    }
}
