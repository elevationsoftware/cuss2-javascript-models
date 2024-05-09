
declare module "model/MRZTrackType" {
    /**
     * The MRZTrackType model module.
     * @module model/MRZTrackType
     * @version 1.0.0
     */
    export class MRZTrackType {
        /**
         * Constructs a <code>MRZTrackType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/MRZTrackType} obj Optional instance to populate.
         * @return {module:model/MRZTrackType} The populated <code>MRZTrackType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {String} trackData
         */
        trackData: any;
        /**
         * @member {Number} trackNumber
         */
        trackNumber: any;
    }
}
