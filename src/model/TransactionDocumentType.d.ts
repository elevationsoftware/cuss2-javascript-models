
declare module "model/TransactionDocumentType" {
    /**
     * *
     */
    export type TransactionDocumentType = string;
    export namespace TransactionDocumentType {
        let NONE: string;
        let REQUEST: string;
        let RESPONSE: string;
        let ACK: string;
        function constructFromObject(object: any): any;
    }
}
