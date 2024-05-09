
declare module "model/OperationDocumentType" {
    /**
     * *
     */
    export type OperationDocumentType = string;
    export namespace OperationDocumentType {
        let NONE: string;
        let REQUEST: string;
        let RESPONSE: string;
        function constructFromObject(object: any): any;
    }
}
