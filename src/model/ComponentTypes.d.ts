
declare module "model/ComponentTypes" {
    /**
     * *
     */
    export type ComponentTypes = string;
    export namespace ComponentTypes {
        let CAPTURE: string;
        let DISPENSER: string;
        let FEEDER: string;
        let DATA_INPUT: string;
        let DATA_OUTPUT: string;
        let USER_INPUT: string;
        let USER_OUTPUT: string;
        let MEDIA_INPUT: string;
        let MEDIA_OUTPUT: string;
        let STORAGE: string;
        let DISPLAY: string;
        let NETWORK: string;
        let BAGGAGE_SCALE: string;
        let INSERTION_BELT: string;
        let VERIFICATION_BELT: string;
        let PARKING_BELT: string;
        let ANNOUNCEMENT: string;
        let APPLICATION: string;
        function constructFromObject(object: any): any;
    }
}
