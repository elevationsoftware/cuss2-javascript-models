declare module "model/ApplicationState" {
    /**
     * The ApplicationState model module.
     * @module model/ApplicationState
     * @version 1.0.0
     */
    export class ApplicationState {
        /**
         * Constructs a <code>ApplicationState</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationState} obj Optional instance to populate.
         * @return {module:model/ApplicationState} The populated <code>ApplicationState</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ApplicationState</code>.
         * Application state codes and reasons to be passed with the statechange request.
         * @alias module:model/ApplicationState
         * @class
         * @param applicationStateCode {module:model/ApplicationStateCodes}
         * @param accessibleMode {Boolean} Indicates whether the application shall operate in ACCESSIBLE mode or not.
         * @param applicationStateChangeReasonCode {module:model/ApplicationStateChangeReasonCodes}
         */
        constructor(applicationStateCode: any, accessibleMode: boolean, applicationStateChangeReasonCode: any);
        applicationStateCode: any;
        accessibleMode: boolean;
        applicationStateChangeReasonCode: any;
        /**
         * The application can use this additional field to inform the platform about the reason for the current state change in free form text. The platform stores this information in its platform logs for bug fixing purposes.
         * @member {String} applicationStateChangeReason
         */
        applicationStateChangeReason: any;
        /**
         * The platform can track which airline code to use for self activated processes/applications.
         * @member {String} applicationBrand
         */
        applicationBrand: any;
    }
}
