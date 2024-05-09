
declare module "model/EPaymentMessageTransactionTransactionAcknowledge" {
    /**
     * The EPaymentMessageTransactionTransactionAcknowledge model module.
     * @module model/EPaymentMessageTransactionTransactionAcknowledge
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionAcknowledge {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionAcknowledge</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionAcknowledge} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionAcknowledge} The populated <code>EPaymentMessageTransactionTransactionAcknowledge</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionAcknowledge</code>.
         * Confirmation (or rejection) of approved funds consumption.
         * @alias module:model/EPaymentMessageTransactionTransactionAcknowledge
         * @class
         * @param consumed {Boolean}
         */
        constructor(consumed: boolean);
        consumed: boolean;
    }
}
