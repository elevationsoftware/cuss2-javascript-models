
declare module "model/DataStatus" {
    /**
     * *
     */
    export type DataStatus = string;
    export namespace DataStatus {
        let OK: string;
        let CORRUPTED: string;
        let INCOMPLETE: string;
        let ZEROLENGTH: string;
        let DOCUMENT_AUTHENTICATION_FAILED: string;
        let INVALID: string;
        let MISMATCH: string;
        function constructFromObject(object: any): any;
    }
}
