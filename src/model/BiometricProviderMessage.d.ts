
declare module "model/BiometricProviderMessage" {
    /**
     * The BiometricProviderMessage model module.
     * @module model/BiometricProviderMessage
     * @version 1.0.0
     */
    export class BiometricProviderMessage {
        /**
         * Constructs a <code>BiometricProviderMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessage} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessage} The populated <code>BiometricProviderMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BiometricProviderMessage</code>.
         * Common use biometric provider component request/response message.
         * @alias module:model/BiometricProviderMessage
         * @class
         * @param biometricProviderMessageType {module:model/BiometricProviderMessageType}
         * @param biometricProviderMessageReturnType {module:model/BiometricProviderMessageType}
         * @param biometricFunctionType {module:model/BiometricProviderMessage.BiometricFunctionTypeEnum} What type of biometric provider message this is.
         */
        constructor(biometricProviderMessageType: any, biometricProviderMessageReturnType: any, biometricFunctionType: any);
        biometricProviderMessageType: any;
        biometricProviderMessageReturnType: any;
        biometricFunctionType: any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricRequest} biometricRequest
         */
        biometricRequest: any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricRequestData} biometricRequestData
         */
        biometricRequestData: any;
        /**
         * @member {module:model/BiometricProviderMessageBiometricResponse} biometricResponse
         */
        biometricResponse: any;
    }
    export namespace BiometricProviderMessage {
        namespace BiometricFunctionTypeEnum {
            let ASSOCIATE: string;
            let DISASSOCIATE: string;
            let ENROLL: string;
            let GET_ASSOCIATIONS: string;
            let IDENTIFY: string;
            let PREVIEW: string;
            let PURGE: string;
            let VERIFY: string;
        }
        /**
         * *
         */
        type BiometricFunctionTypeEnum = string;
    }
}
