
declare module "model/FeatureList" {
    /**
     * The FeatureList model module.
     * @module model/FeatureList
     * @version 1.0.0
     */
    export class FeatureList {
        /**
         * Constructs a <code>FeatureList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/FeatureList} obj Optional instance to populate.
         * @return {module:model/FeatureList} The populated <code>FeatureList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>FeatureList</code>.
         * Payment system supported, component-configured or application-requested feature set.
         * @alias module:model/FeatureList
         * @class
         * @param features {Array.<module:model/Feature>}
         */
        constructor(features: Array<NodeModule>);
        features: NodeModule[];
    }
}
