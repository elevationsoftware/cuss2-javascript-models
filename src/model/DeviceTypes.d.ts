
declare module "model/DeviceTypes" {
    /**
     * *
     */
    export type DeviceTypes = string;
    export namespace DeviceTypes {
        let NON_APPLICABLE_DEVICE_TYPE: string;
        let PRINT: string;
        let READ: string;
        let MOTORIZED: string;
        let DIP: string;
        let SWIPE: string;
        let CONTACTLESS: string;
        let INSERT: string;
        let DISPENSE: string;
        let CAPTURE: string;
        let CONVEYOR: string;
        let SCALE: string;
        let CHIP_AND_PIN: string;
        let EXTERNAL: string;
        let BIOMETRICS: string;
        let ASSISTIVE: string;
        let ILLUMINATION: string;
        let DISPLAY: string;
        let CAMERA: string;
        function constructFromObject(object: any): any;
    }
}
