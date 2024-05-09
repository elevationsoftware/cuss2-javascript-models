
declare module "model/ApplicationStateCodes" {
    /**
     * *
     */
    export type ApplicationStateCodes = string;
    export namespace ApplicationStateCodes {
        let INITIALIZE: string;
        let UNAVAILABLE: string;
        let AVAILABLE: string;
        let ACTIVE: string;
        let STOPPED: string;
        let RELOAD: string;
        let SUSPENDED: string;
        let DISABLED: string;
        function constructFromObject(object: any): any;
    }
}
