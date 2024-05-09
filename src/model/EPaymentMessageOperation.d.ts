
declare module "model/EPaymentMessageOperation" {
    /**
     * The EPaymentMessageOperation model module.
     * @module model/EPaymentMessageOperation
     * @version 1.0.0
     */
    export class EPaymentMessageOperation {
        /**
         * Constructs a <code>EPaymentMessageOperation</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageOperation} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageOperation} The populated <code>EPaymentMessageOperation</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EPaymentMessageOperation</code>.
         * Request that the component perform some function that is not a direct financial transaction, such as key management, start-of-day, end-of-day, cashier sign-on, system status check, etc.
         * @alias module:model/EPaymentMessageOperation
         * @class
         * @param operationDocumentType {module:model/OperationDocumentType}
         * @param operationType {module:model/EPaymentMessageOperation.OperationTypeEnum}
         */
        constructor(operationDocumentType: any, operationType: any);
        operationDocumentType: any;
        operationType: any;
        /**
         * @member {module:model/OperationDocumentType} operationDocumentReturnType
         */
        operationDocumentReturnType: any;
        /**
         * Some requests may require additional qualifying data, but those that do not are not required to explicitly include this element.
         * @member {String} operationRequest
         */
        operationRequest: any;
        /**
         * @member {module:model/EPaymentMessageOperation.OperationResponseEnum} operationResponse
         */
        operationResponse: any;
    }
    export namespace EPaymentMessageOperation {
        namespace OperationTypeEnum {
            let SYSTEM_HEALTH: string;
        }
        /**
         * *
         */
        type OperationTypeEnum = string;
        namespace OperationResponseEnum {
            let OFFLINE: string;
            let ONLINE: string;
        }
        /**
         * *
         */
        type OperationResponseEnum = string;
    }
}
