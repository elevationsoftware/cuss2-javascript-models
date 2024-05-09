
declare module "model/MediaType" {
    /**
     * *
     */
    export type MediaType = string;
    export namespace MediaType {
        let ICC: string;
        let MAG_STRIPE: string;
        let NFC: string;
        let RFID: string;
        function constructFromObject(object: any): any;
    }
}
