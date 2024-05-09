
declare module "model/PlatformData" {
    /**
     * The PlatformData model module.
     * @module model/PlatformData
     * @version 1.0.0
     */
    export class PlatformData {
        /**
         * Constructs a <code>PlatformData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PlatformData} obj Optional instance to populate.
         * @return {module:model/PlatformData} The populated <code>PlatformData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>PlatformData</code>.
         * PlatformData is used to transfer results from (regular) directive calls back to the application.
         * @alias module:model/PlatformData
         * @class
         * @param meta {module:model/PlatformDataMeta}
         */
        constructor(meta: any);
        meta: any;
        /**
         * @member {module:model/PlatformDataPayload} payload
         */
        payload: any;
    }
}
