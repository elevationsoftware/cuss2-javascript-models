
declare module "model/EventTypes" {
    /**
     * *
     */
    export type EventTypes = string;
    export namespace EventTypes {
        let PRIVATE: string;
        let PUBLIC: string;
        let PLATFORM: string;
        function constructFromObject(object: any): any;
    }
}
