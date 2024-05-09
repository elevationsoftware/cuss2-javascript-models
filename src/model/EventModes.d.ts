
declare module "model/EventModes" {
    /**
     * *
     */
    export type EventModes = string;
    export namespace EventModes {
        let SOLICITED: string;
        let UNSOLICITED: string;
        function constructFromObject(object: any): any;
    }
}
