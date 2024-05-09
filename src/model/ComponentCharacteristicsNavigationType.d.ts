
declare module "model/ComponentCharacteristicsNavigationType" {
    /**
     * The ComponentCharacteristicsNavigationType model module.
     * @module model/ComponentCharacteristicsNavigationType
     * @version 1.0.0
     */
    export class ComponentCharacteristicsNavigationType {
        /**
         * Constructs a <code>ComponentCharacteristicsNavigationType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristicsNavigationType} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristicsNavigationType} The populated <code>ComponentCharacteristicsNavigationType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/NavigationTypes} type
         */
        type: any;
    }
}
