
declare module "model/EPaymentMessageTransactionTransactionRequestAccount" {
    /**
     * The EPaymentMessageTransactionTransactionRequestAccount model module.
     * @module model/EPaymentMessageTransactionTransactionRequestAccount
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestAccount {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestAccount</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestAccount} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestAccount} The populated <code>EPaymentMessageTransactionTransactionRequestAccount</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionRequestAccount</code>.
         * Optional common use terminal/application-acquired account details.
         * @alias module:model/EPaymentMessageTransactionTransactionRequestAccount
         * @class
         * @param accountType {module:model/EPaymentMessageTransactionTransactionRequestAccount.AccountTypeEnum}
         */
        constructor(accountType: any);
        accountType: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestAccountManual} manual
         */
        manual: any;
        /**
         * @member {module:model/EPaymentMessageTransactionTransactionRequestAccountSwipe} swipe
         */
        swipe: any;
    }
    export namespace EPaymentMessageTransactionTransactionRequestAccount {
        namespace AccountTypeEnum {
            let MANUAL: string;
            let SWIPE: string;
        }
        /**
         * *
         */
        type AccountTypeEnum = string;
    }
}
