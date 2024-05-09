
declare module "model/IlluminationDataLightColor" {
    /**
     * The IlluminationDataLightColor model module.
     * @module model/IlluminationDataLightColor
     * @version 1.0.0
     */
    export class IlluminationDataLightColor {
        /**
         * Constructs a <code>IlluminationDataLightColor</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/IlluminationDataLightColor} obj Optional instance to populate.
         * @return {module:model/IlluminationDataLightColor} The populated <code>IlluminationDataLightColor</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Predefined values: CLR_ON, CLR_OFF, CLR_RED, CLR_GREEN, CLR_BLUE, CLR_DARKRED, CLR_DARKGREEN, CLR_DARKBLUE, CLR_YELLOW, CLR_MAGENTA, CLR_CYAN, CLR_AMBER, CLR_PURPLE, CLR_SPRINGGREEN, CLR_WHITE
         * @member {module:model/IlluminationDataLightColor.NameEnum} name
         */
        name: any;
        /**
         * @member {module:model/RgbType} rgb
         */
        rgb: any;
    }
    export namespace IlluminationDataLightColor {
        namespace NameEnum {
            let ON: string;
            let OFF: string;
            let RED: string;
            let GREEN: string;
            let BLUE: string;
            let DARKRED: string;
            let DARKGREEN: string;
            let DARKBLUE: string;
            let YELLOW: string;
            let MAGENTA: string;
            let CYAN: string;
            let AMBER: string;
            let PURPLE: string;
            let SPRINGGREEN: string;
            let WHITE: string;
        }
        /**
         * *
         */
        type NameEnum = string;
    }
}
