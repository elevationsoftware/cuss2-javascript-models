declare module "model/BiometricProviderMessageBiometricRequestData" {
    /**
     * The BiometricProviderMessageBiometricRequestData model module.
     * @module model/BiometricProviderMessageBiometricRequestData
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricRequestData {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricRequestData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricRequestData} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricRequestData} The populated <code>BiometricProviderMessageBiometricRequestData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricRequestDataProcessing} processing
         */
        processing: any;
        /**
         * @member {module:model/PassengerDataType} passenger
         */
        passenger: any;
    }
}
