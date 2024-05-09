declare module "model/PlatformDataMeta" {
    /**
     * The PlatformDataMeta model module.
     * @module model/PlatformDataMeta
     * @version 1.0.0
     */
    export class PlatformDataMeta {
        /**
         * Constructs a <code>PlatformDataMeta</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PlatformDataMeta} obj Optional instance to populate.
         * @return {module:model/PlatformDataMeta} The populated <code>PlatformDataMeta</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>PlatformDataMeta</code>.
         * The META data of this message
         * @alias module:model/PlatformDataMeta
         * @class
         * @param deviceID  {String} The aggregated identifier of the device/touchpoint as configured by the operator.
         * @param timeStamp {Date} Time stamp in UTC format.
         * @param passengerSessionID {module:model/PassengerSessionID}
         * @param applicationID {module:model/ApplicationID}
         * @param currentApplicationState {module:model/ApplicationState}
         * @param messageCode {module:model/MessageCodes}
         */
        constructor(timeStamp: Date, passengerSessionID: any, applicationID: any, currentApplicationState: any, messageCode: any);
        timeStamp: Date;
        passengerSessionID: any;
        applicationID: any;
        currentApplicationState: any;
        messageCode: any;
        /**
         * @member {module:model/RequestID} requestID
         */
        requestID: any;
        /**
         * @member {module:model/ComponentID} componentID
         */
        componentID: any;
        /**
         * @member {module:model/ComponentState} componentState
         */
        componentState: any;
        /**
         * @member {module:model/PlatformDataMetaEventClassification} eventClassification
         */
        eventClassification: any;
        /**
         * @member {module:model/PlatformDirectives} platformDirective
         */
        platformDirective: any;
        /**
         * The aggregated identifier of the device/touchpoint as configured by the operator.
         * @member {String} deviceID
         */
        deviceID: any;
    }
}
