
declare module "model/BiometricProviderMessageType" {
    /**
     * *
     */
    export type BiometricProviderMessageType = string;
    export namespace BiometricProviderMessageType {
        let NONE: string;
        let REQUEST: string;
        let REQUEST_DATA: string;
        let RESPONSE: string;
        function constructFromObject(object: any): any;
    }
}
