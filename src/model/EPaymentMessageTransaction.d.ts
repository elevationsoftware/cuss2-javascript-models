
declare module "model/EPaymentMessageTransaction" {
    /**
     * The EPaymentMessageTransaction model module.
     * @module model/EPaymentMessageTransaction
     * @version 1.0.0
     */
    export class EPaymentMessageTransaction {
        /**
         * Constructs a <code>EPaymentMessageTransaction</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransaction} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransaction} The populated <code>EPaymentMessageTransaction</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransaction</code>.
         * Financial transaction.
         * @alias module:model/EPaymentMessageTransaction
         * @class
         * @param transactionDocumentType {module:model/TransactionDocumentType}
         * @param transactionType {module:model/EPaymentMessageTransaction.TransactionTypeEnum}
         */
        constructor(transactionDocumentType: any, transactionType: any);
        transactionDocumentType: any;
        transactionType: any;
        /**
         * @member {module:model/TransactionDocumentType} transactionDocumentReturnType
         */
        transactionDocumentReturnType: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequest} transactionRequest
         */
        transactionRequest: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionResponse} transactionResponse
         */
        transactionResponse: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionAcknowledge} transactionAcknowledge
         */
        transactionAcknowledge: any;
    }
    export namespace EPaymentMessageTransaction {
        namespace TransactionTypeEnum {
            let CANCEL: string;
            let PRE_AUTH: string;
            let POST_AUTH: string;
            let PURCHASE: string;
            let REFUND: string;
            let VOID_PURCHASE: string;
            let VOID_REFUND: string;
        }
        /**
         * *
         */
        type TransactionTypeEnum = string;
    }
}
