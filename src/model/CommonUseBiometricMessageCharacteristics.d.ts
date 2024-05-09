
declare module "model/CommonUseBiometricMessageCharacteristics" {
    /**
     * The CommonUseBiometricMessageCharacteristics model module.
     * @module model/CommonUseBiometricMessageCharacteristics
     * @version 1.0.0
     */
    export class CommonUseBiometricMessageCharacteristics {
        /**
         * Constructs a <code>CommonUseBiometricMessageCharacteristics</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUseBiometricMessageCharacteristics} obj Optional instance to populate.
         * @return {module:model/CommonUseBiometricMessageCharacteristics} The populated <code>CommonUseBiometricMessageCharacteristics</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUseBiometricMessageCharacteristics</code>.
         * Component characteristics.
         * @alias module:model/CommonUseBiometricMessageCharacteristics
         * @class
         * @param characteristicsDocumentType {module:model/CharacteristicsDocumentType}
         * @param characteristicsDocumentReturnType {module:model/CharacteristicsDocumentType}
         */
        constructor(characteristicsDocumentType: any, characteristicsDocumentReturnType: any);
        characteristicsDocumentType: any;
        characteristicsDocumentReturnType: any;
        /**
         * @member {module:model/BiometricAnyType} characteristicsRequest
         */
        characteristicsRequest: any;
        /**
         * @member {module:model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse} characteristicsResponse
         */
        characteristicsResponse: any;
    }
}
