
declare module "model/CommonUsePaymentMessageCharacteristics" {
    /**
     * The CommonUsePaymentMessageCharacteristics model module.
     * @module model/CommonUsePaymentMessageCharacteristics
     * @version 1.0.0
     */
    export class CommonUsePaymentMessageCharacteristics {
        /**
         * Constructs a <code>CommonUsePaymentMessageCharacteristics</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUsePaymentMessageCharacteristics} obj Optional instance to populate.
         * @return {module:model/CommonUsePaymentMessageCharacteristics} The populated <code>CommonUsePaymentMessageCharacteristics</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUsePaymentMessageCharacteristics</code>.
         * Component characteristics.
         * @alias module:model/CommonUsePaymentMessageCharacteristics
         * @class
         * @param characteristicsDocumentType {module:model/CharacteristicsDocumentType}
         * @param characteristicsDocumentReturnType {module:model/CharacteristicsDocumentType}
         */
        constructor(characteristicsDocumentType: any, characteristicsDocumentReturnType: any);
        characteristicsDocumentType: any;
        characteristicsDocumentReturnType: any;
        /**
         * @member {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse} characteristicsResponse
         */
        characteristicsResponse: any;
    }
}
