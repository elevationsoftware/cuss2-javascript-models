
declare module "model/ApplicationDataPayload" {
    /**
     * The ApplicationDataPayload model module.
     * @module model/ApplicationDataPayload
     * @version 1.0.0
     */
    export class ApplicationDataPayload {
        /**
         * Constructs a <code>ApplicationDataPayload</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationDataPayload} obj Optional instance to populate.
         * @return {module:model/ApplicationDataPayload} The populated <code>ApplicationDataPayload</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/ApplicationState} applicationState
         */
        applicationState: any;
        /**
         * @member {module:model/ApplicationTransfer} applicationTransfer
         */
        applicationTransfer: any;
        /**
         * @member {module:model/DataRecordList} dataRecords
         */
        dataRecords: any;
        /**
         * @member {module:model/ScreenResolution} screenResolution
         */
        screenResolution: any;
        /**
         * @member {module:model/IlluminationData} illuminationData
         */
        illuminationData: any;
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
