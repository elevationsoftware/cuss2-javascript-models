
declare module "model/BiometricProviderMessageBiometricRequestEnvironment" {
    /**
     * The BiometricProviderMessageBiometricRequestEnvironment model module.
     * @module model/BiometricProviderMessageBiometricRequestEnvironment
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricRequestEnvironment {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricRequestEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricRequestEnvironment} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricRequestEnvironment} The populated <code>BiometricProviderMessageBiometricRequestEnvironment</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BiometricProviderMessageBiometricRequestEnvironment</code>.
         * Execution environment and parameters.
         * @alias module:model/BiometricProviderMessageBiometricRequestEnvironment
         * @class
         * @param language {String} ISO 639-1 (2-character) code for the interface language to be used by the biometric provider.
         */
        constructor(language: string);
        language: string;
        /**
         * Whether to execute the biometric function in accessibility mode.
         * @member {Boolean} accessibilityMode
         */
        accessibilityMode: any;
    }
}
