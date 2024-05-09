
declare module "model/ComponentState" {
    /**
     * *
     */
    export type ComponentState = string;
    export namespace ComponentState {
        let READY: string;
        let BUSY: string;
        let UNAVAILABLE: string;
        function constructFromObject(object: any): any;
    }
}
