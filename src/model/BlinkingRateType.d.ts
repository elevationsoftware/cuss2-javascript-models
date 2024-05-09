
declare module "model/BlinkingRateType" {
    /**
     * The BlinkingRateType model module.
     * @module model/BlinkingRateType
     * @version 1.0.0
     */
    export class BlinkingRateType {
        /**
         * Constructs a <code>BlinkingRateType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BlinkingRateType} obj Optional instance to populate.
         * @return {module:model/BlinkingRateType} The populated <code>BlinkingRateType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>BlinkingRateType</code>.
         * The definition of the blinking rate. If a pair of 0,0 is specified (default) or only one value is 0 blinking is turned off.
         * @alias module:model/BlinkingRateType
         * @class
         * @param durationOff {Number} Time in milliseconds the light remains switched off.
         * @param durationOn {Number} Time in milliseconds the light is switched on.
         */
        constructor(durationOff: number, durationOn: number);
        durationOff: number;
        durationOn: number;
    }
}
