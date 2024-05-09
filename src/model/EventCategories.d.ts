
declare module "model/EventCategories" {
    /**
     * *
     */
    export type EventCategories = string;
    export namespace EventCategories {
        let ALARM: string;
        let WARNING: string;
        let NORMAL: string;
        function constructFromObject(object: any): any;
    }
}
