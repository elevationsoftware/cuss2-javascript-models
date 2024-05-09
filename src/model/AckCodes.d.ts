
declare module "model/AckCodes" {
    /**
     * *
     */
    export type AckCodes = string;
    export namespace AckCodes {
        let OK: string;
        let ERROR: string;
        let OAUTH_ERROR: string;
        let PARAMETER: string;
        function constructFromObject(object: any): any;
    }
}
