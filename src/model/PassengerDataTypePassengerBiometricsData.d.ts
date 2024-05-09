
declare module "model/PassengerDataTypePassengerBiometricsData" {
    /**
     * The PassengerDataTypePassengerBiometricsData model module.
     * @module model/PassengerDataTypePassengerBiometricsData
     * @version 1.0.0
     */
    export class PassengerDataTypePassengerBiometricsData {
        /**
         * Constructs a <code>PassengerDataTypePassengerBiometricsData</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerDataTypePassengerBiometricsData} obj Optional instance to populate.
         * @return {module:model/PassengerDataTypePassengerBiometricsData} The populated <code>PassengerDataTypePassengerBiometricsData</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>PassengerDataTypePassengerBiometricsData</code>.
         * List or container of all passenger biometric data sets.
         * @alias module:model/PassengerDataTypePassengerBiometricsData
         * @class
         * @param passengerBiometrics {Array.<module:model/PassengerBiometricsType>}
         */
        constructor(passengerBiometrics: Array<NodeModule>);
        passengerBiometrics: NodeModule[];
    }
}
