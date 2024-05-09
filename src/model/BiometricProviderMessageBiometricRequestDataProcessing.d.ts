
declare module "model/BiometricProviderMessageBiometricRequestDataProcessing" {
    /**
     * The BiometricProviderMessageBiometricRequestDataProcessing model module.
     * @module model/BiometricProviderMessageBiometricRequestDataProcessing
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricRequestDataProcessing {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricRequestDataProcessing</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricRequestDataProcessing} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricRequestDataProcessing} The populated <code>BiometricProviderMessageBiometricRequestDataProcessing</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * A sequence of one or more keypad key identifiers as defined in the CUSS specification \"Keyboard and Navigation Keypad\" section. Values include, but are not limited to, NAVUP, NAVDOWN, NAVPREVIOUS, NAVNEXT, NAVENTER, NAVHOME, NAVEND and NAVHELP.
         * @member {Array.<String>} keypadKey
         */
        keypadKey: any;
    }
}
