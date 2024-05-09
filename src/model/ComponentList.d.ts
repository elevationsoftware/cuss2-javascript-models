
declare module "model/ComponentList" {
    /**
     * The ComponentList model module.
     * @module model/ComponentList
     * @version 1.0.0
     */
    export class ComponentList extends Array<any> {
        /**
         * Constructs a <code>ComponentList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentList} obj Optional instance to populate.
         * @return {module:model/ComponentList} The populated <code>ComponentList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ComponentList</code>.
         * The list of hardware and software components that comprise a complete CUSS platform.
         * @alias module:model/ComponentList
         * @class
         * @extends Array
         */
        constructor();
    }
}
