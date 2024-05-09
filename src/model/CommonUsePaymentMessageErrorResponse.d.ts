
declare module "model/CommonUsePaymentMessageErrorResponse" {
    /**
     * The CommonUsePaymentMessageErrorResponse model module.
     * @module model/CommonUsePaymentMessageErrorResponse
     * @version 1.0.0
     */
    export class CommonUsePaymentMessageErrorResponse {
        /**
         * Constructs a <code>CommonUsePaymentMessageErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUsePaymentMessageErrorResponse} obj Optional instance to populate.
         * @return {module:model/CommonUsePaymentMessageErrorResponse} The populated <code>CommonUsePaymentMessageErrorResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUsePaymentMessageErrorResponse</code>.
         * Document cannot be parsed or validated, or is unexpected, out-of-sequence or out-of-context for the current component state.
         * @alias module:model/CommonUsePaymentMessageErrorResponse
         * @class
         * @param errorReason {module:model/CommonUsePaymentMessageErrorResponse.ErrorReasonEnum} Human-readable reason that the document could not be processed by the component.
         * @param errorCode {Number} Error code as reported from the system(s) down the line.
         */
        constructor(errorReason: any, errorCode: number);
        errorReason: any;
        errorCode: number;
        /**
         * Echo of unreadable or illogical document in base64 format.
         * @member {Blob} errorDocument
         */
        errorDocument: any;
    }
    export namespace CommonUsePaymentMessageErrorResponse {
        namespace ErrorReasonEnum {
            let DATA_ERROR: string;
            let FORMAT_ERROR: string;
            let ILLOGICAL: string;
        }
        /**
         * *
         */
        type ErrorReasonEnum = string;
    }
}
