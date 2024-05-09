
declare module "model/EPaymentMessageTransactionTransactionResponseApproval" {
    /**
     * The EPaymentMessageTransactionTransactionResponseApproval model module.
     * @module model/EPaymentMessageTransactionTransactionResponseApproval
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionResponseApproval {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionResponseApproval</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionResponseApproval} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionResponseApproval} The populated <code>EPaymentMessageTransactionTransactionResponseApproval</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionResponseApproval</code>.
         * Approval reference information. An application may use this information as it chooses. No sensitive payment information shall be provided in this element. Various data items, such as cryptogram, may be required by some application providers for proper payment processing and reconciliation.
         * @alias module:model/EPaymentMessageTransactionTransactionResponseApproval
         * @class
         * @param authorizationAmounts {module:model/AuthorizationAmounts}
         */
        constructor(authorizationAmounts: any);
        authorizationAmounts: any;
        /**
         * @member {Boolean} cardholderReceiptPrinted
         */
        cardholderReceiptPrinted: any;
        /**
         * @member {Boolean} merchantReceiptPrinted
         */
        merchantReceiptPrinted: any;
        /**
         * @member {module:model/TransactionReference} transactionReference
         */
        transactionReference: any;
        /**
         * @member {module:model/MediaType} mediaType
         */
        mediaType: any;
        /**
         * Type of approval.
         * @member {module:model/EPaymentMessageTransactionTransactionResponseApproval.ApprovalTypeEnum} approvalType
         */
        approvalType: any;
        /**
         * For an approval that requires subsequent signature verification by the application, and where the component has electronic signature capture capability, the signature capture (PNG format) data in base64 representation.
         * @member {String} signatureCapture
         */
        signatureCapture: any;
        /**
         * Card brand name.
         * @member {String} cardBrand
         */
        cardBrand: any;
        /**
         * Secured (masked or truncated) card primary account number.
         * @member {String} cardPAN
         */
        cardPAN: any;
        /**
         * @member {module:model/ApprovalCode} approvalCode
         */
        approvalCode: any;
        /**
         * @member {module:model/GPParameterList} gpParameters
         */
        gpParameters: any;
        /**
         * @member {Array.<module:model/ReceiptData>} receiptData
         */
        receiptData: any;
    }
    export namespace EPaymentMessageTransactionTransactionResponseApproval {
        namespace ApprovalTypeEnum {
            let NONE: string;
            let PIN: string;
            let SIGNATURE: string;
        }
        /**
         * *
         */
        type ApprovalTypeEnum = string;
    }
}
