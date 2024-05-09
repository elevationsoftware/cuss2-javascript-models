
declare module "model/TransactionStatus" {
    /**
     * The TransactionStatus model module.
     * @module model/TransactionStatus
     * @version 1.0.0
     */
    export class TransactionStatus {
        /**
         * Constructs a <code>TransactionStatus</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/TransactionStatus} obj Optional instance to populate.
         * @return {module:model/TransactionStatus} The populated <code>TransactionStatus</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/TransactionStatus.TransactionStatusIDEnum} transactionStatusID
         */
        transactionStatusID: any;
    }
    export namespace TransactionStatus {
        namespace TransactionStatusIDEnum {
            let AMOUNT_APPROVAL: string;
            let APPLICATION_SELECTION: string;
            let CARD_INSERTION: string;
            let CARD_REMOVAL: string;
            let CASHBACK_ENTRY: string;
            let PIN_ENTRY: string;
            let PROCESSING: string;
        }
        /**
         * *
         */
        type TransactionStatusIDEnum = string;
    }
}
