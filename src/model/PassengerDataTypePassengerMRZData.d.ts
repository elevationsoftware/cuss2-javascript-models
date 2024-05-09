
declare module "model/PassengerDataTypePassengerMRZData" {
    /**
     * The PassengerDataTypePassengerMRZData model module.
     * @module model/PassengerDataTypePassengerMRZData
     * @version 1.0.0
     */
    export class PassengerDataTypePassengerMRZData {
        /**
         * Constructs a <code>PassengerDataTypePassengerMRZData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerDataTypePassengerMRZData} obj Optional instance to populate.
         * @return {module:model/PassengerDataTypePassengerMRZData} The populated <code>PassengerDataTypePassengerMRZData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>PassengerDataTypePassengerMRZData</code>.
         * MRZ data from passenger&#x27;s government-issued travel, visa or residency document.
         * @alias module:model/PassengerDataTypePassengerMRZData
         * @class
         * @param mrzTrackData {Array.<module:model/MRZTrackType>}
         */
        constructor(mrzTrackData: Array<NodeModule>);
        mrzTrackData: NodeModule[];
    }
}
