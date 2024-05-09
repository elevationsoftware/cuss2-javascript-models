
declare module "model/GPParameter" {
    /**
     * The GPParameter model module.
     * @module model/GPParameter
     * @version 1.0.0
     */
    export class GPParameter {
        /**
         * Constructs a <code>GPParameter</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/GPParameter} obj Optional instance to populate.
         * @return {module:model/GPParameter} The populated <code>GPParameter</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>GPParameter</code>.
         * General Purpose Data Item (name-value pair)
         * @alias module:model/GPParameter
         * @class
         * @param name {String}
         * @param value {String}
         */
        constructor(name: string, value: string);
        name: string;
        value: string;
    }
}
