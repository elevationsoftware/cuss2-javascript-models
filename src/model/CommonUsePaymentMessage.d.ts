
declare module "model/CommonUsePaymentMessage" {
    /**
     * The CommonUsePaymentMessage model module.
     * @module model/CommonUsePaymentMessage
     * @version 1.0.0
     */
    export class CommonUsePaymentMessage {
        /**
         * Constructs a <code>CommonUsePaymentMessage</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUsePaymentMessage} obj Optional instance to populate.
         * @return {module:model/CommonUsePaymentMessage} The populated <code>CommonUsePaymentMessage</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUsePaymentMessage</code>.
         * Common use message document root element.
         * @alias module:model/CommonUsePaymentMessage
         * @class
         * @param documentType {module:model/CommonUsePaymentMessage.DocumentTypeEnum} The document type that is included in this message
         */
        constructor(documentType: any);
        documentType: any;
        /**
         * An arbitrary tracking value that the CUSS application chooses and assigns when starting a payment function. The CUSS platform must then echo this requested value in all subsequent responses or asynchronous event messages related to that payment function. This correlation permits a CUSS application to match and associate request and response messages and is critical for the case where an application has more than one multi-step payment function ongoing concurrently.
         * @member {String} sessionID
         */
        sessionID: any;
        /**
         * @member {module:model/CommonUsePaymentMessageCharacteristics} characteristics
         */
        characteristics: any;
        /**
         * @member {module:model/EPaymentMessage} ePaymentMessage
         */
        ePaymentMessage: any;
        /**
         * @member {module:model/CommonUsePaymentMessageErrorResponse} errorResponse
         */
        errorResponse: any;
    }
    export namespace CommonUsePaymentMessage {
        namespace DocumentTypeEnum {
            let CHARACTERISTICS: string;
            let EPAYMENT_MESSAGE: string;
            let ERROR_RESPONSE: string;
        }
        /**
         * *
         */
        type DocumentTypeEnum = string;
    }
}
