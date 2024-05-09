
declare module "model/BiometricProviderMessageBiometricRequest" {
    /**
     * The BiometricProviderMessageBiometricRequest model module.
     * @module model/BiometricProviderMessageBiometricRequest
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricRequest {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricRequest</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricRequest} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricRequest} The populated <code>BiometricProviderMessageBiometricRequest</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricRequestEnvironment} environment
         */
        environment: any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricRequestAgreementsList} agreementsList
         */
        agreementsList: any;
        /**
         * @member {module:model/PassengerDataType} passenger
         */
        passenger: any;
        /**
         * @member {module:model/GPDataListType} gpDataList
         */
        gpDataList: any;
    }
}
