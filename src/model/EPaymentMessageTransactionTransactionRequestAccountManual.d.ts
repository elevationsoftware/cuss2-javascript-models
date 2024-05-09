
declare module "model/EPaymentMessageTransactionTransactionRequestAccountManual" {
    /**
     * The EPaymentMessageTransactionTransactionRequestAccountManual model module.
     * @module model/EPaymentMessageTransactionTransactionRequestAccountManual
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestAccountManual {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestAccountManual</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestAccountManual} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestAccountManual} The populated <code>EPaymentMessageTransactionTransactionRequestAccountManual</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionRequestAccountManual</code>.
         * Manually-acquired account details (or the relevant elements from an electronic acquisition).
         * @alias module:model/EPaymentMessageTransactionTransactionRequestAccountManual
         * @class
         * @param pan {String}
         * @param expiration {String} MMYY format.
         */
        constructor(pan: string, expiration: string);
        pan: string;
        expiration: string;
    }
}
