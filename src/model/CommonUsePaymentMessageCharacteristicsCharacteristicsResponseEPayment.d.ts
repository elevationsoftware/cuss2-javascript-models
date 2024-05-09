
declare module "model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment" {
    /**
     * The CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment model module.
     * @module model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment
     * @version 1.0.0
     */
    export class CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment {
        /**
         * Constructs a <code>CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment} obj Optional instance to populate.
         * @return {module:model/CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment} The populated <code>CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/FeatureList} featureList
         */
        featureList: any;
        /**
         * @member {module:model/CardBrandList} cardBrandList
         */
        cardBrandList: any;
        /**
         * @member {module:model/MediaTypeList} mediaTypeList
         */
        mediaTypeList: any;
        /**
         * @member {module:model/CurrencyCodeList} currencyCodeList
         */
        currencyCodeList: any;
    }
}
