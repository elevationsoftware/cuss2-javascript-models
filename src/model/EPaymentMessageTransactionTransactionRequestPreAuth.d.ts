
declare module "model/EPaymentMessageTransactionTransactionRequestPreAuth" {
    /**
     * The EPaymentMessageTransactionTransactionRequestPreAuth model module.
     * @module model/EPaymentMessageTransactionTransactionRequestPreAuth
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestPreAuth {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestPreAuth</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestPreAuth} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestPreAuth} The populated <code>EPaymentMessageTransactionTransactionRequestPreAuth</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionRequestPreAuth</code>.
         * Details of previously acquired pre-authorization being finalized by this post-authorization.
         * @alias module:model/EPaymentMessageTransactionTransactionRequestPreAuth
         * @class
         * @param approvalAmounts {module:model/AmountType}
         */
        constructor(approvalAmounts: any);
        approvalAmounts: any;
        /**
         * @member {module:model/TransactionReference} transactionReference
         */
        transactionReference: any;
        /**
         * @member {module:model/ApprovalCode} approvalCode
         */
        approvalCode: any;
    }
}
