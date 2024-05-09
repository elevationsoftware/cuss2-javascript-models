
declare module "model/ApplicationActivation" {
    /**
     * The ApplicationActivation model module.
     * @module model/ApplicationActivation
     * @version 1.0.0
     */
    export class ApplicationActivation {
        /**
         * Constructs a <code>ApplicationActivation</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationActivation} obj Optional instance to populate.
         * @return {module:model/ApplicationActivation} The populated <code>ApplicationActivation</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ApplicationActivation</code>.
         * The platform uses the CUSS 2 Application Activation Structure when activating a CUSS application.
         * @alias module:model/ApplicationActivation
         * @class
         * @param executionMode {module:model/ApplicationActivation.ExecutionModeEnum} Indicates the mode of execution.<p> *MAM:* Multi Appliaction Mode <br> *DSAM:* Dedicated Single Application Mode
         * @param accessibleMode {Boolean} Indicates whether to operate in ACCESSIBLE mode or not.
         * @param languageID {String} As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm
         */
        constructor(executionMode: any, accessibleMode: boolean, languageID: string);
        executionMode: any;
        accessibleMode: boolean;
        languageID: string;
        /**
         * The application can use this value to change its look, feel, or behaviour.
         * @member {String} applicationBrand
         */
        applicationBrand: any;
        /**
         * Any additional options of execution in combination with the executionMode.
         * @member {Array.<String>} executionOptions
         */
        executionOptions: any;
        /**
         * Any data to be exchanged between callers and callees after a transfer call or self-activation.
         * @member {Blob} transferData
         */
        transferData: any;
    }
    export namespace ApplicationActivation {
        namespace ExecutionModeEnum {
            let MAM: string;
            let DSAM: string;
        }
        /**
         * *
         */
        type ExecutionModeEnum = string;
    }
}
