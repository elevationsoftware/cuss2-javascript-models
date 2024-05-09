
declare module "model/CommonUseBiometricMessage" {
    /**
     * The CommonUseBiometricMessage model module.
     * @module model/CommonUseBiometricMessage
     * @version 1.0.0
     */
    export class CommonUseBiometricMessage {
        /**
         * Constructs a <code>CommonUseBiometricMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUseBiometricMessage} obj Optional instance to populate.
         * @return {module:model/CommonUseBiometricMessage} The populated <code>CommonUseBiometricMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUseBiometricMessage</code>.
         * Common use message document root element.
         * @alias module:model/CommonUseBiometricMessage
         * @class
         * @param documentType {module:model/CommonUseBiometricMessage.DocumentTypeEnum} The document type that is included in this message
         */
        constructor(documentType: any);
        documentType: any;
        /**
         * An arbitrary tracking value that the CUSS application chooses and assigns when starting a biometric provider function. The CUSS platform must then echo this requested value in all subsequent responses or asynchronous event messages related to that biometric provider function. This correlation permits a CUSS application to match and associate request and response messages and is critical for the case where an application has more than one multi-step biometric provider function ongoing concurrently.
         * @member {String} sessionID
         */
        sessionID: any;
        /**
         * @member {module:model/CommonUseBiometricMessageCharacteristics} characteristics
         */
        characteristics: any;
        /**
         * @member {module:model/BiometricProviderMessage} biometricProviderMessage
         */
        biometricProviderMessage: any;
        /**
         * Error code as reported from the CUSS platform.
         * @member {module:model/CommonUseBiometricMessage.ErrorResponseEnum} errorResponse
         */
        errorResponse: any;
    }
    export namespace CommonUseBiometricMessage {
        namespace DocumentTypeEnum {
            let CHARACTERISTICS: string;
            let BIOMETRIC_PROVIDER_MESSAGE: string;
            let ERROR_RESPONSE: string;
        }
        /**
         * *
         */
        type DocumentTypeEnum = string;
        namespace ErrorResponseEnum {
            let DATA_ERROR: string;
            let FORMAT_ERROR: string;
            let ILLOGICAL: string;
        }
        /**
         * *
         */
        type ErrorResponseEnum = string;
    }
}
