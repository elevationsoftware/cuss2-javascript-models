
declare module "model/ApplicationID" {
    /**
     * The ApplicationID model module.
     * @module model/ApplicationID
     * @version 1.0.0
     */
    export class ApplicationID {
        /**
         * Constructs a <code>ApplicationID</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ApplicationID} obj Optional instance to populate.
         * @return {module:model/ApplicationID} The populated <code>ApplicationID</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * eg. 3L- or 2L-code for airlines
         * @member {String} companyCode
         */
        companyCode: any;
        /**
         * Name of the application
         * @member {String} applicationName
         */
        applicationName: any;
    }
}
