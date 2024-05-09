
declare module "model/AgreementTextType" {
    /**
     * The AgreementTextType model module.
     * @module model/AgreementTextType
     * @version 1.0.0
     */
    export class AgreementTextType {
        /**
         * Constructs a <code>AgreementTextType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/AgreementTextType} obj Optional instance to populate.
         * @return {module:model/AgreementTextType} The populated <code>AgreementTextType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>AgreementTextType</code>.
         * to be documented!
         * @alias module:model/AgreementTextType
         * @class
         * @param acceptanceMandatory {Boolean}
         */
        constructor(acceptanceMandatory: boolean);
        acceptanceMandatory: boolean;
        /**
         * @member {String} agreementText
         */
        agreementText: any;
        /**
         * @member {String} agreementName
         */
        agreementName: any;
    }
}
