
declare module "model/ApplicationTransfer" {
    /**
     * The ApplicationTransfer model module.
     * @module model/ApplicationTransfer
     * @version 1.0.0
     */
    export class ApplicationTransfer {
        /**
         * Constructs a <code>ApplicationTransfer</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationTransfer} obj Optional instance to populate.
         * @return {module:model/ApplicationTransfer} The populated <code>ApplicationTransfer</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ApplicationTransfer</code>.
         * Applications and platforms use the CUSS 2 Application Transfer Structure for transferring control from one application to another.
         * @alias module:model/ApplicationTransfer
         * @class
         * @param transferRequestType {module:model/ApplicationTransfer.TransferRequestTypeEnum} Indicates whether to START an application or to CANCEL a pending transfer
         * @param targetApplicationID {module:model/ApplicationID}
         * @param languageID {String} As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm
         */
        constructor(transferRequestType: any, targetApplicationID: any, languageID: string);
        transferRequestType: any;
        targetApplicationID: any;
        languageID: string;
        /**
         * The application can use this value to change its look, feel, or behavior.
         * @member {String} applicationBrand
         */
        applicationBrand: any;
        /**
         * Any data to be exchanged between callers and callees.
         * @member {Blob} transferData
         */
        transferData: any;
    }
    export namespace ApplicationTransfer {
        namespace TransferRequestTypeEnum {
            let START: string;
            let CANCEL: string;
        }
        /**
         * *
         */
        type TransferRequestTypeEnum = string;
    }
}
