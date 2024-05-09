
declare module "model/EPaymentMessageTransactionTransactionRequest" {
    /**
     * The EPaymentMessageTransactionTransactionRequest model module.
     * @module model/EPaymentMessageTransactionTransactionRequest
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequest {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequest</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequest} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequest} The populated <code>EPaymentMessageTransactionTransactionRequest</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {String} language
         */
        language: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestEnvironment} environment
         */
        environment: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestPreAuth} preAuth
         */
        preAuth: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestAccount} account
         */
        account: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestItinerary} itinerary
         */
        itinerary: any;
        /**
         * Descriptive billing information. This optional value lets the CUSS application suggest a value that will appear on the kiosk application user’s payment summary (monthly bill, etc.) as an extended description of the transaction. The value may or may not appear on the customer’s bill depending on the capabilities of the airport and customer’s banking systems. Long data may be truncated.  The platform may also be used as an additional tracking mechanism for other systems such as aggregator and reconciliation infrastructure.
         * @member {String} billingDescription
         */
        billingDescription: any;
        /**
         * @member {module:model/GPParameterList} gpParameters
         */
        gpParameters: any;
        /**
         * @member {module:model/AuthorizationAmounts} authorizationAmounts
         */
        authorizationAmounts: any;
    }
}
