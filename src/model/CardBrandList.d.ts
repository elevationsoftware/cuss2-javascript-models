
declare module "model/CardBrandList" {
    /**
     * The CardBrandList model module.
     * @module model/CardBrandList
     * @version 1.0.0
     */
    export class CardBrandList {
        /**
         * Constructs a <code>CardBrandList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CardBrandList} obj Optional instance to populate.
         * @return {module:model/CardBrandList} The populated <code>CardBrandList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CardBrandList</code>.
         * Payment system supported, component-configured or application-requested card brand list.
         * @alias module:model/CardBrandList
         * @class
         * @param cardBrands {Array.<module:model/CardBrand>}
         */
        constructor(cardBrands: Array<NodeModule>);
        cardBrands: NodeModule[];
        /**
         * @member {Boolean} overridable
         */
        overridable: any;
    }
}
