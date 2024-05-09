
declare module "model/EPaymentMessageTransactionTransactionRequestAccountSwipe" {
    /**
     * The EPaymentMessageTransactionTransactionRequestAccountSwipe model module.
     * @module model/EPaymentMessageTransactionTransactionRequestAccountSwipe
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestAccountSwipe {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestAccountSwipe</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestAccountSwipe} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestAccountSwipe} The populated <code>EPaymentMessageTransactionTransactionRequestAccountSwipe</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageTransactionTransactionRequestAccountSwipe</code>.
         * Electronically-acquired account details.
         * @alias module:model/EPaymentMessageTransactionTransactionRequestAccountSwipe
         * @class
         * @param track {Array.<module:model/CardTrackType>}
         */
        constructor(track: Array<NodeModule>);
        track: NodeModule[];
    }
}
