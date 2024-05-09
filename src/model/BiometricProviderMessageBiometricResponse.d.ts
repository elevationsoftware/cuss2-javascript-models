declare module "model/BiometricProviderMessageBiometricResponse" {
    /**
     * The BiometricProviderMessageBiometricResponse model module.
     * @module model/BiometricProviderMessageBiometricResponse
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricResponse {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricResponse} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricResponse} The populated <code>BiometricProviderMessageBiometricResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BiometricProviderMessageBiometricResponse</code>.
         * Function request response from biometric provider component to common use application.
         * @alias module:model/BiometricProviderMessageBiometricResponse
         * @class
         * @param responseType {module:model/BiometricProviderMessageBiometricResponse.ResponseTypeEnum}
         */
        constructor(responseType: any);
        responseType: any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricResponseFailureReason} failureReason
         */
        failureReason: any;
        /**
         * @member {module:model/PassengerDataType} passengerData
         */
        passengerData: any;
        /**
         * @member {module:model/GPDataListType} gpDataList
         */
        gpDataList: any;
    }
    export namespace BiometricProviderMessageBiometricResponse {
        namespace ResponseTypeEnum {
            let CANCELLATION: string;
            let FAILURE: string;
            let NOTIFICATION: string;
            let SUCCESS: string;
        }
        /**
         * *
         */
        type ResponseTypeEnum = string;
    }
}
