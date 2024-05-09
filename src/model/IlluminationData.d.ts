
declare module "model/IlluminationData" {
    /**
     * The IlluminationData model module.
     * @module model/IlluminationData
     * @version 1.0.0
     */
    export class IlluminationData {
        /**
         * Constructs a <code>IlluminationData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/IlluminationData} obj Optional instance to populate.
         * @return {module:model/IlluminationData} The populated <code>IlluminationData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>IlluminationData</code>.
         * Definition for light controls.
         * @alias module:model/IlluminationData
         * @class
         * @param duration {Number} The duration of the illumination in milliseconds (steady or blinking). - A negative value value (e.g. -1) defines the duration as infinite and lasts until disable() is called on the component.
         * @param lightColor {module:model/IlluminationDataLightColor}
         */
        constructor(duration: number, lightColor: any);
        duration: number;
        lightColor: any;
        /**
         * @member {module:model/BlinkingRateType} blinkRate
         */
        blinkRate: any;
    }
}
