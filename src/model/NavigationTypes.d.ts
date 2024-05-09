
declare module "model/NavigationTypes" {
    /**
     * *
     */
    export type NavigationTypes = string;
    export namespace NavigationTypes {
        let NON_APPLICABLE_NAVIGATION_TYPE: string;
        let nAVPAD5KEY: string;
        let nAVPAD8KEY: string;
        let aUDIONAV6KEY: string;
        let aUDIONAV6KEYBAR: string;
        function constructFromObject(object: any): any;
    }
}
