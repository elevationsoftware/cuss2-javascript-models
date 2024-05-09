declare module "model/APIAcknowledgement" {
    /**
     * The APIAcknowledgement model module.
     * @module model/APIAcknowledgement
     * @version 1.0.0
     */
    export class APIAcknowledgement {
        /**
         * Constructs a <code>APIAcknowledgement</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/APIAcknowledgement} obj Optional instance to populate.
         * @return {module:model/APIAcknowledgement} The populated <code>APIAcknowledgement</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>APIAcknowledgement</code>.
         * Direct Interface Acknowledge Codes
         * @alias module:model/APIAcknowledgement
         * @class
         * @param ackCode {module:model/AckCodes}
         * @param requestID {module:model/RequestID}
         */
        constructor(ackCode: any, requestID: any);
        ackCode: any;
        requestID: any;
        /**
         * Optional description of the returned error (if any)
         * @member {String} description
         */
        description: any;
    }
}
