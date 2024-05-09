
declare module "model/AlibiType" {
    /**
     * The AlibiType model module.
     * @module model/AlibiType
     * @version 1.0.0
     */
    export class AlibiType {
        /**
         * Constructs a <code>AlibiType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/AlibiType} obj Optional instance to populate.
         * @return {module:model/AlibiType} The populated <code>AlibiType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>AlibiType</code>.
         * Reference or confirmation number for the measurement values, for audit or alibi purposes
         * @alias module:model/AlibiType
         * @class
         * @param value {String} The alibi value
         */
        constructor(value: string);
        value: string;
        /**
         * The source or provider of the alibi value
         * @member {String} provider
         */
        provider: any;
    }
}
