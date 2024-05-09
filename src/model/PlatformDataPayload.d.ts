
declare module "model/PlatformDataPayload" {
    /**
     * The PlatformDataPayload model module.
     * @module model/PlatformDataPayload
     * @version 1.0.0
     */
    export class PlatformDataPayload {
        /**
         * Constructs a <code>PlatformDataPayload</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PlatformDataPayload} obj Optional instance to populate.
         * @return {module:model/PlatformDataPayload} The populated <code>PlatformDataPayload</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/ApplicationActivation} applicationActivation
         */
        applicationActivation: any;
        /**
         * @member {module:model/EnvironmentLevel} environmentLevel
         */
        environmentLevel: any;
        /**
         * @member {module:model/ComponentList} componentList
         */
        componentList: any;
        /**
         * @member {module:model/DataRecordList} dataRecords
         */
        dataRecords: any;
        /**
         * @member {module:model/BaggageData} bagdropData
         */
        bagdropData: any;
        /**
         * @member {module:model/CommonUsePaymentMessage} paymentData
         */
        paymentData: any;
        /**
         * @member {module:model/CommonUseBiometricMessage} biometricData
         */
        biometricData: any;
    }
}
