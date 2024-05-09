
declare module "model/ApplicationStateChangeReasonCodes" {
    /**
     * *
     */
    export type ApplicationStateChangeReasonCodes = string;
    export namespace ApplicationStateChangeReasonCodes {
        let NOT_APPLICABLE: string;
        let OUT_OF_SERVICE_HOURS: string;
        let OUT_OF_SERVICE_HARDWARE: string;
        let OUT_OF_SERVICE_BHS: string;
        let OUT_OF_SERVICE_CONSUMABLES: string;
        let OUT_OF_SERVICE_INTERNAL: string;
        let OUT_OF_SERVICE_DCS: string;
        let OUT_OF_SERVICE_BACKEND: string;
        function constructFromObject(object: any): any;
    }
}
