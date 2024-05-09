
declare module "model/EPaymentMessageTransactionTransactionResponse" {
    /**
     * The EPaymentMessageTransactionTransactionResponse model module.
     * @module model/EPaymentMessageTransactionTransactionResponse
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionResponse {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionResponse} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionResponse} The populated <code>EPaymentMessageTransactionTransactionResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionResponse</code>.
         * Financial request response from payment component to common use application.
         * @alias module:model/EPaymentMessageTransactionTransactionResponse
         * @class
         * @param responseType {module:model/EPaymentMessageTransactionTransactionResponse.ResponseTypeEnum}
         */
        constructor(responseType: any);
        responseType: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionResponseApproval} approval
         */
        approval: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionResponseNonApproval} nonApproval
         */
        nonApproval: any;
        /**
         * @member {module:model/TransactionStatus} transactionStatus
         */
        transactionStatus: any;
    }
    export namespace EPaymentMessageTransactionTransactionResponse {
        namespace ResponseTypeEnum {
            let APPROVAL: string;
            let CANCELLATION: string;
            let DECLINE: string;
            let FAILURE: string;
            let STATUS: string;
        }
        /**
         * *
         */
        type ResponseTypeEnum = string;
    }
}
