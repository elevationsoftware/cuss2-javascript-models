
declare module "model/EPaymentMessageTransactionTransactionResponseNonApproval" {
    /**
     * The EPaymentMessageTransactionTransactionResponseNonApproval model module.
     * @module model/EPaymentMessageTransactionTransactionResponseNonApproval
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionResponseNonApproval {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionResponseNonApproval</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionResponseNonApproval} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionResponseNonApproval} The populated <code>EPaymentMessageTransactionTransactionResponseNonApproval</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Number} nonApprovalReasonCode
         */
        nonApprovalReasonCode: any;
        /**
         * @member {Boolean} referral
         */
        referral: any;
        /**
         * Optional human-readable/display text describing the reason for non-approval.
         * @member {String} nonApprovalReasonText
         */
        nonApprovalReasonText: any;
        /**
         * @member {Array.<module:model/ReceiptData>} receiptData
         */
        receiptData: any;
    }
}
