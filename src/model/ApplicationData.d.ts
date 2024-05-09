
declare module "model/ApplicationData" {
    /**
     * The ApplicationData model module.
     * @module model/ApplicationData
     * @version 1.0.0
     */
    export class ApplicationData {
        /**
         * Constructs a <code>ApplicationData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationData} obj Optional instance to populate.
         * @return {module:model/ApplicationData} The populated <code>ApplicationData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ApplicationData</code>.
         * Data to be passed to the platform with directive calls.
         * @alias module:model/ApplicationData
         * @class
         * @param meta {module:model/ApplicationDataMeta}
         */
        constructor(meta: any);
        meta: any;
        /**
         * @member {module:model/ApplicationDataPayload} payload
         */
        payload: any;
    }
}
