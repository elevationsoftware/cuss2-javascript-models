
declare module "model/EPaymentMessageSetup" {
    /**
     * The EPaymentMessageSetup model module.
     * @module model/EPaymentMessageSetup
     * @version 1.0.0
     */
    export class EPaymentMessageSetup {
        /**
         * Constructs a <code>EPaymentMessageSetup</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageSetup} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageSetup} The populated <code>EPaymentMessageSetup</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/DsTypesEpayment} dsTypes
         */
        dsTypes: any;
        /**
         * @member {module:model/MerchantID} merchantID
         */
        merchantID: any;
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
