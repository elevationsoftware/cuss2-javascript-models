
declare module "model/BiometricProviderMessageBiometricResponseFailureReason" {
    /**
     * The BiometricProviderMessageBiometricResponseFailureReason model module.
     * @module model/BiometricProviderMessageBiometricResponseFailureReason
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricResponseFailureReason {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricResponseFailureReason</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricResponseFailureReason} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricResponseFailureReason} The populated <code>BiometricProviderMessageBiometricResponseFailureReason</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BiometricProviderMessageBiometricResponseFailureReason</code>.
         * Failure specification.
         * @alias module:model/BiometricProviderMessageBiometricResponseFailureReason
         * @class
         * @param failureCode {module:model/BiometricProviderMessageBiometricResponseFailureReason.FailureCodeEnum} Eror code as received and mapped from the IMPs response.
         */
        constructor(failureCode: any);
        failureCode: any;
        /**
         * Optional free form text describing the failure.
         * @member {String} failureDescription
         */
        failureDescription: any;
    }
    export namespace BiometricProviderMessageBiometricResponseFailureReason {
        namespace FailureCodeEnum {
            let FAILED: string;
            let TIMEOUT: string;
            let CAMERA_ERROR: string;
            let INVALID_CONFIGURATION: string;
            let MATCH_FAILED: string;
            let NOT_IDENTIFIED: string;
            let POOR_CAMERA_IMAGE: string;
            let POOR_DOCUMENT_IMAGE: string;
            let DATA_SET_NOT_FOUND: string;
            let FACE_NOT_DETECTED: string;
        }
        /**
         * *
         */
        type FailureCodeEnum = string;
    }
}
