
declare module "model/CardTrackType" {
    /**
     * The CardTrackType model module.
     * @module model/CardTrackType
     * @version 1.0.0
     */
    export class CardTrackType {
        /**
         * Constructs a <code>CardTrackType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CardTrackType} obj Optional instance to populate.
         * @return {module:model/CardTrackType} The populated <code>CardTrackType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {Number} trackNumber
         */
        trackNumber: any;
        /**
         * @member {String} trackData
         */
        trackData: any;
    }
}
