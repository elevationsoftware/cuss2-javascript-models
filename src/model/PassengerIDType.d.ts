
declare module "model/PassengerIDType" {
    /**
     * The PassengerIDType model module.
     * @module model/PassengerIDType
     * @version 1.0.0
     */
    export class PassengerIDType {
        /**
         * Constructs a <code>PassengerIDType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerIDType} obj Optional instance to populate.
         * @return {module:model/PassengerIDType} The populated <code>PassengerIDType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {String} identifier
         */
        identifier: any;
        /**
         * @member {module:model/PassengerIDType.IdentifierTypeEnum} identifierType
         */
        identifierType: any;
    }
    export namespace PassengerIDType {
        namespace IdentifierTypeEnum {
            let CLIENT: string;
            let PROVIDER: string;
        }
        /**
         * *
         */
        type IdentifierTypeEnum = string;
    }
}
