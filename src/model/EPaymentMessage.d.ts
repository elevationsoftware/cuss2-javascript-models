
declare module "model/EPaymentMessage" {
    /**
     * The EPaymentMessage model module.
     * @module model/EPaymentMessage
     * @version 1.0.0
     */
    export class EPaymentMessage {
        /**
         * Constructs a <code>EPaymentMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessage} obj Optional instance to populate.
         * @return {module:model/EPaymentMessage} The populated <code>EPaymentMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessage</code>.
         * Common use payment component request/response message.
         * @alias module:model/EPaymentMessage
         * @class
         * @param ePaymentMsgType {module:model/EPaymentMessage.EPaymentMsgTypeEnum}
         */
        constructor(ePaymentMsgType: any);
        ePaymentMsgType: any;
        /**
         * @member {module:model/EPaymentMessageSetup} setup
         */
        setup: any;
        /**
         * @member {module:model/EPaymentMessageTransaction} transaction
         */
        transaction: any;
        /**
         * @member {module:model/EPaymentMessageOperation} operation
         */
        operation: any;
    }
    export namespace EPaymentMessage {
        namespace EPaymentMsgTypeEnum {
            let OPERATION: string;
            let SETUP: string;
            let TRANSACTION: string;
        }
        /**
         * *
         */
        type EPaymentMsgTypeEnum = string;
    }
}
