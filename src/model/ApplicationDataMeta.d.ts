declare module "model/ApplicationDataMeta" {
    /**
     * The ApplicationDataMeta model module.
     * @module model/ApplicationDataMeta
     * @version 1.0.0
     */
    export class ApplicationDataMeta {
        /**
         * Constructs a <code>ApplicationDataMeta</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationDataMeta} obj Optional instance to populate.
         * @return {module:model/ApplicationDataMeta} The populated <code>ApplicationDataMeta</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>ApplicationDataMeta</code>.
         * The META data of this message
         * @alias module:model/ApplicationDataMeta
         * @class
         * @param requestID {module:model/RequestID}
         * @param oauthToken {String} Application token (JWT) received with the Client Credentials. The token shall be passed with every platfrom directive.
         * @param directive {module:model/PlatformDirectives}
         * @param deviceID  {String} The aggregated identifier of the device/touchpoint as configured by the operator.
         */
        constructor(requestID: any, oauthToken: string, directive: any);
        requestID: any;
        oauthToken: string;
        directive: any;
        /**
         * @member {module:model/ComponentID} componentID
         */
        componentID: any;
        /**
         * The aggregated identifier of the device/touchpoint as configured by the operator.
         * @member {String} deviceID
         */
        deviceID: any;
    }
}
