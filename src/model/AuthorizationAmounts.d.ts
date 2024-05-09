
declare module "model/AuthorizationAmounts" {
    /**
     * The AuthorizationAmounts model module.
     * @module model/AuthorizationAmounts
     * @version 1.0.0
     */
    export class AuthorizationAmounts {
        /**
         * Constructs a <code>AuthorizationAmounts</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/AuthorizationAmounts} obj Optional instance to populate.
         * @return {module:model/AuthorizationAmounts} The populated <code>AuthorizationAmounts</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/AmountType} requestedAmounts
         */
        requestedAmounts: any;
        /**
         * @member {module:model/AmountType} approvedAmounts
         */
        approvedAmounts: any;
    }
}
