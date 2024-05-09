
declare module "model/ScreenResolution" {
    /**
     * The ScreenResolution model module.
     * @module model/ScreenResolution
     * @version 1.0.0
     */
    export class ScreenResolution {
        /**
         * Constructs a <code>ScreenResolution</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ScreenResolution} obj Optional instance to populate.
         * @return {module:model/ScreenResolution} The populated <code>ScreenResolution</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Number} vertical
         */
        vertical: any;
        /**
         * @member {Number} horizontal
         */
        horizontal: any;
    }
}
