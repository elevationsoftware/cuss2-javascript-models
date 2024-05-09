
declare module "model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse" {
    /**
     * The CommonUseBiometricMessageCharacteristicsCharacteristicsResponse model module.
     * @module model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse
     * @version 1.0.0
     */
    export class CommonUseBiometricMessageCharacteristicsCharacteristicsResponse {
        /**
         * Constructs a <code>CommonUseBiometricMessageCharacteristicsCharacteristicsResponse</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse} obj Optional instance to populate.
         * @return {module:model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse} The populated <code>CommonUseBiometricMessageCharacteristicsCharacteristicsResponse</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>CommonUseBiometricMessageCharacteristicsCharacteristicsResponse</code>.
         * @alias module:model/CommonUseBiometricMessageCharacteristicsCharacteristicsResponse
         * @class
         * @param dsTypes {Object} DS type(s) string.
         */
        constructor(dsTypes: any);
        dsTypes: any;
    }
}
