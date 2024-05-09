
declare module "model/GPParameterList" {
    /**
     * The GPParameterList model module.
     * @module model/GPParameterList
     * @version 1.0.0
     */
    export class GPParameterList {
        /**
         * Constructs a <code>GPParameterList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/GPParameterList} obj Optional instance to populate.
         * @return {module:model/GPParameterList} The populated <code>GPParameterList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Array.<module:model/GPParameter>} gpParameters
         */
        gpParameters: any;
    }
}
