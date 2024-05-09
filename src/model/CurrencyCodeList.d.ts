
declare module "model/CurrencyCodeList" {
    /**
     * The CurrencyCodeList model module.
     * @module model/CurrencyCodeList
     * @version 1.0.0
     */
    export class CurrencyCodeList {
        /**
         * Constructs a <code>CurrencyCodeList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CurrencyCodeList} obj Optional instance to populate.
         * @return {module:model/CurrencyCodeList} The populated <code>CurrencyCodeList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CurrencyCodeList</code>.
         * Payment system supported, component-configured or application-requested payment currency code list.
         * @alias module:model/CurrencyCodeList
         * @class
         * @param currencyCodes {Array.<module:model/CurrencyCode>}
         */
        constructor(currencyCodes: Array<NodeModule>);
        currencyCodes: NodeModule[];
        /**
         * @member {Boolean} overridable
         */
        overridable: any;
    }
}
