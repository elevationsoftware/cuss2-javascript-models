
declare module "model/BiometricProviderMessageBiometricRequestAgreementsList" {
    /**
     * The BiometricProviderMessageBiometricRequestAgreementsList model module.
     * @module model/BiometricProviderMessageBiometricRequestAgreementsList
     * @version 1.0.0
     */
    export class BiometricProviderMessageBiometricRequestAgreementsList {
        /**
         * Constructs a <code>BiometricProviderMessageBiometricRequestAgreementsList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BiometricProviderMessageBiometricRequestAgreementsList} obj Optional instance to populate.
         * @return {module:model/BiometricProviderMessageBiometricRequestAgreementsList} The populated <code>BiometricProviderMessageBiometricRequestAgreementsList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BiometricProviderMessageBiometricRequestAgreementsList</code>.
         * List of agreements/consents to present prior to or during enrollment.
         * @alias module:model/BiometricProviderMessageBiometricRequestAgreementsList
         * @class
         * @param agreementTextList {Array.<module:model/AgreementTextType>}
         */
        constructor(agreementTextList: Array<NodeModule>);
        agreementTextList: NodeModule[];
    }
}
