
declare module "model/MediaTypeList" {
    /**
     * The MediaTypeList model module.
     * @module model/MediaTypeList
     * @version 1.0.0
     */
    export class MediaTypeList {
        /**
         * Constructs a <code>MediaTypeList</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MediaTypeList} obj Optional instance to populate.
         * @return {module:model/MediaTypeList} The populated <code>MediaTypeList</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>MediaTypeList</code>.
         * Payment system supported, component-configured or application-requested media type list.
         * @alias module:model/MediaTypeList
         * @class
         * @param mediaTypes {Array.<module:model/MediaType>}
         */
        constructor(mediaTypes: Array<NodeModule>);
        mediaTypes: NodeModule[];
        /**
         * @member {Boolean} overridable
         */
        overridable: any;
    }
}
