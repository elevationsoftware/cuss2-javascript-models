
declare module "model/PassengerBiometricsType" {
    /**
     * The PassengerBiometricsType model module.
     * @module model/PassengerBiometricsType
     * @version 1.0.0
     */
    export class PassengerBiometricsType {
        /**
         * Constructs a <code>PassengerBiometricsType</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/PassengerBiometricsType} obj Optional instance to populate.
         * @return {module:model/PassengerBiometricsType} The populated <code>PassengerBiometricsType</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>PassengerBiometricsType</code>.
         * Passenger biometrics data item.
         * @alias module:model/PassengerBiometricsType
         * @class
         * @param biometricsType {module:model/PassengerBiometricsType.BiometricsTypeEnum}
         * @param dataFormat {module:model/PassengerBiometricsType.DataFormatEnum}
         */
        constructor(biometricsType: any, dataFormat: any);
        biometricsType: any;
        dataFormat: any;
        /**
         * @member {Blob} data
         */
        data: any;
        /**
         * @member {module:model/PassengerBiometricsType.LightTypeEnum} lightType
         */
        lightType: any;
        /**
         * @member {module:model/PassengerBiometricsType.DataSourceEnum} dataSource
         */
        dataSource: any;
    }
    export namespace PassengerBiometricsType {
        namespace BiometricsTypeEnum {
            let FACE: string;
            let FINGER: string;
            let IRIS: string;
            let PALM: string;
        }
        /**
         * *
         */
        type BiometricsTypeEnum = string;
        namespace LightTypeEnum {
            let IR: string;
            let UV: string;
            let VISIBLE: string;
        }
        /**
         * *
         */
        type LightTypeEnum = string;
        namespace DataSourceEnum {
            let BIOMETRIC_PROVIDER: string;
            let CAMERA: string;
            let MRTD_CHIP: string;
            let MRTD_VISIBLE: string;
            let SCANNER: string;
        }
        /**
         * *
         */
        type DataSourceEnum = string;
        namespace DataFormatEnum {
            let BMP: string;
            let JPG: string;
            let PNG: string;
        }
        /**
         * *
         */
        type DataFormatEnum = string;
    }
}
