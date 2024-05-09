
declare module "model/EnvironmentComponent" {
    /**
     * The EnvironmentComponent model module.
     * @module model/EnvironmentComponent
     * @version 1.0.0
     */
    export class EnvironmentComponent {
        /**
         * Constructs a <code>EnvironmentComponent</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EnvironmentComponent} obj Optional instance to populate.
         * @return {module:model/EnvironmentComponent} The populated <code>EnvironmentComponent</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * A textual description of the component. - Can be different on every platform. - Not to be used for component identfication.
         * @member {String} componentDescription
         */
        componentDescription: any;
        /**
         * @member {module:model/ComponentID} componentID
         */
        componentID: any;
        /**
         * @member {module:model/ComponentTypes} componentType
         */
        componentType: any;
        /**
         * The characteristics of this specific component, please refer to CUSS-IG document for a detailed list and descriptions.
         * @member {Array.<module:model/ComponentCharacteristics>} componentCharacteristics
         */
        componentCharacteristics: any;
        /**
         * A list of identifiers of components linked to this component.
         * @member {Array.<module:model/ComponentID>} linkedComponentIDs
         */
        linkedComponentIDs: any;
    }
}
