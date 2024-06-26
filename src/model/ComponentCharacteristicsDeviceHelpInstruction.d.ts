
declare module "model/ComponentCharacteristicsDeviceHelpInstruction" {
    /**
     * The ComponentCharacteristicsDeviceHelpInstruction model module.
     * @module model/ComponentCharacteristicsDeviceHelpInstruction
     * @version 1.0.0
     */
    export class ComponentCharacteristicsDeviceHelpInstruction {
        /**
         * Constructs a <code>ComponentCharacteristicsDeviceHelpInstruction</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristicsDeviceHelpInstruction} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristicsDeviceHelpInstruction} The populated <code>ComponentCharacteristicsDeviceHelpInstruction</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/DeviceHelpInstructionType} instruction
         */
        instruction: any;
        /**
         * SSML version supported by the audio output component.
         * @member {String} ssmlVersion
         */
        ssmlVersion: any;
    }
}
