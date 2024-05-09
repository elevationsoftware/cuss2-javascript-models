
declare module "model/ComponentCharacteristics" {
    /**
     * The ComponentCharacteristics model module.
     * @module model/ComponentCharacteristics
     * @version 1.0.0
     */
    export class ComponentCharacteristics {
        /**
         * Constructs a <code>ComponentCharacteristics</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristics} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristics} The populated <code>ComponentCharacteristics</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ComponentCharacteristics</code>.
         * @alias module:model/ComponentCharacteristics
         * @class
         * @param mediaTypesList {Array.<module:model/MediaTypes>} A list of media type identifiers.
         */
        constructor(mediaTypesList: Array<NodeModule>);
        mediaTypesList: NodeModule[];
        /**
         * @member {module:model/ComponentCharacteristicsDeviceHelpInstruction} deviceHelpInstruction
         */
        deviceHelpInstruction: any;
        /**
         * A list of data types identifiers.
         * @member {Array.<module:model/CUSSDataTypes>} dsTypesList
         */
        dsTypesList: any;
        /**
         * A list of device type identifiers.
         * @member {Array.<module:model/DeviceTypes>} deviceTypesList
         */
        deviceTypesList: any;
        /**
         * @member {module:model/ComponentCharacteristicsNavigationType} navigationType
         */
        navigationType: any;
        /**
         * @member {module:model/ComponentCharacteristicsDisplayType} displayType
         */
        displayType: any;
        /**
         * ITPS/AEA version supported by printers (BTP/BPP). - The minimum version must be [current version -1]. Example: 2018
         * @member {String} itpsVersion
         */
        itpsVersion: any;
        /**
         * Scalable Vector Graphics (SVG) 1.1. -  Please refer also to: https://www.w3.org/TR/SVG11/
         * @member {String} svgVersion
         */
        svgVersion: any;
        /**
         * If true, the baggage tag printer supports color printing (black and red).
         * @member {Boolean} supportsColor
         */
        supportsColor: any;
        /**
         * @member {module:model/ComponentCharacteristicsDocumentBin} documentBin
         */
        documentBin: any;
        /**
         * @member {module:model/ComponentCharacteristicsConveyorSBD} conveyorSBD
         */
        conveyorSBD: any;
    }
}
