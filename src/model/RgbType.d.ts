
declare module "model/RgbType" {
    /**
     * The RgbType model module.
     * @module model/RgbType
     * @version 1.0.0
     */
    export class RgbType {
        /**
         * Constructs a <code>RgbType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/RgbType} obj Optional instance to populate.
         * @return {module:model/RgbType} The populated <code>RgbType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>RgbType</code>.
         * Distinct RGB values.
         * @alias module:model/RgbType
         * @class
         * @param red {Number} Value for the red color part. Values from 0 - 255
         * @param green {Number} Value for the red color part. Values from 0 - 255
         * @param blue {Number} Value for the red color part. Values from 0 - 255
         */
        constructor(red: number, green: number, blue: number);
        red: number;
        green: number;
        blue: number;
    }
}
