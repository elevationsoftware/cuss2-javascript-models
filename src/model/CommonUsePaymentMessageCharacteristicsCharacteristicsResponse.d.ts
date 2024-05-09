
declare module "model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse" {
    /**
     * The CommonUsePaymentMessageCharacteristicsCharacteristicsResponse model module.
     * @module model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse
     * @version 1.0.0
     */
    export class CommonUsePaymentMessageCharacteristicsCharacteristicsResponse {
        /**
         * Constructs a <code>CommonUsePaymentMessageCharacteristicsCharacteristicsResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse} obj Optional instance to populate.
         * @return {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse} The populated <code>CommonUsePaymentMessageCharacteristicsCharacteristicsResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUsePaymentMessageCharacteristicsCharacteristicsResponse</code>.
         * @alias module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponse
         * @class
         * @param dsTypes {module:model/DsTypesEpayment}
         */
        constructor(dsTypes: any);
        dsTypes: any;
        /**
         * @member {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment} ePayment
         */
        ePayment: any;
    }
}
