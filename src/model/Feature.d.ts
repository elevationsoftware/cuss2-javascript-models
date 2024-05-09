
declare module "model/Feature" {
    /**
     * The Feature model module.
     * @module model/Feature
     * @version 1.0.0
     */
    export class Feature {
        /**
         * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/Feature} obj Optional instance to populate.
         * @return {module:model/Feature} The populated <code>Feature</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>Feature</code>.
         * What modes of payment are supported by the payment terminal or requested by the application. The application requests a particular mode of payment in its setup() request parameters. The auto-commit feature indicates whether or not the application wishes to perform a manual commit at the end of a successful transaction. The pre-authorization feature indicates whether the pre-authorization/post-authorization payment model is supported.
         * @alias module:model/Feature
         * @class
         * @param featureName {module:model/Feature.FeatureNameEnum}
         */
        constructor(featureName: any);
        featureName: any;
        /**
         * @member {Boolean} overridable
         */
        overridable: any;
    }
    export namespace Feature {
        namespace FeatureNameEnum {
            let AUTO_COMMIT: string;
            let PRE_AUTHORIZATION: string;
            let RECEIPT_PRINTER: string;
            let SIGNATURE_CAPTURE: string;
            let SIGNATURE_CVM_SUPPORTED: string;
        }
        /**
         * *
         */
        type FeatureNameEnum = string;
    }
}
