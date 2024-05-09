
declare module "model/EPaymentMessageTransactionTransactionRequestEnvironment" {
    /**
     * The EPaymentMessageTransactionTransactionRequestEnvironment model module.
     * @module model/EPaymentMessageTransactionTransactionRequestEnvironment
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestEnvironment {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestEnvironment} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestEnvironment} The populated <code>EPaymentMessageTransactionTransactionRequestEnvironment</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/MerchantID} merchantID
         */
        merchantID: any;
        /**
         * Common use kiosk/terminal/station identifier. May be reported on cardholder or reconciliation statements for informational purposes.
         * @member {String} location
         */
        location: any;
        /**
         * Agent/cashier (or pseudo-cashier) identifier. May be reported on cardholder or reconciliation statements for informational purposes. Some payment solutions may require this, but the component will synthesize a value if one is required but none is explicitly provided.
         * @member {String} cashier
         */
        cashier: any;
        /**
         * Airline/merchant order, receipt or ticket reference number. May be reported on cardholder or reconciliation statements for informational purposes.
         * @member {String} orderReference
         */
        orderReference: any;
    }
}
