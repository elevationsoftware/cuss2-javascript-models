declare module "model/PassengerDataType" {
    /**
     * The PassengerDataType model module.
     * @module model/PassengerDataType
     * @version 1.0.0
     */
    export class PassengerDataType {
        /**
         * Constructs a <code>PassengerDataType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerDataType} obj Optional instance to populate.
         * @return {module:model/PassengerDataType} The populated <code>PassengerDataType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Can be a maximum of 2 IDs (client and provider).
         * @member {Array.<module:model/PassengerIDType>} passengerIDs
         */
        passengerIDs: any;
        /**
         * Passenger's family name (last name or surname).
         * @member {String} passengerFamilyName
         */
        passengerFamilyName: any;
        /**
         * Passenger's given name (christian or first names).
         * @member {String} passengerGivenNames
         */
        passengerGivenNames: any;
        /**
         * @member {module:model/PassengerDataTypePassengerMRZData} passengerMRZData
         */
        passengerMRZData: any;
        /**
         * @member {module:model/PassengerDataTypePassengerBiometricsData} passengerBiometricsData
         */
        passengerBiometricsData: any;
        /**
         * @member {module:model/PassengerDataTypeAssociationDataList} associationDataList
         */
        associationDataList: any;
    }
}
