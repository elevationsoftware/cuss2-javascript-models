
declare module "model/EnvironmentLevel" {
    /**
     * The EnvironmentLevel model module.
     * @module model/EnvironmentLevel
     * @version 1.0.0
     */
    export class EnvironmentLevel {
        /**
         * Constructs a <code>EnvironmentLevel</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EnvironmentLevel} obj Optional instance to populate.
         * @return {module:model/EnvironmentLevel} The populated <code>EnvironmentLevel</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Constructs a new <code>EnvironmentLevel</code>.
         * Describes the environment/device on which the application will be operated.
         * @alias module:model/EnvironmentLevel
         * @class
         * @param sessionTimeout {Number} Session Timeout (in milliseconds) for active applications
         * @param killTimeout {Number} Time (in milliseconds) left before an application is killed
         * @param deviceID {String} The aggregated identifier of the device/touchpoint as configured by the operator.
         * @param deviceLocation {module:model/Location}
         * @param cussVersions {Array.<String>} Supported versions of the CUSS specifications.
         * @param cussInterfaceVersions {Array.<String>} Supported versions of the CUSS API definitions.
         * @param osName {String} Name of the installed operating system
         * @param osVersion {String} Version of the installed operating system
         */
        constructor(sessionTimeout: number, killTimeout: number, deviceID: string, deviceLocation: any, cussVersions: Array<string>, cussInterfaceVersions: Array<string>, osName: string, osVersion: string);
        sessionTimeout: number;
        killTimeout: number;
        deviceID: string;
        deviceLocation: any;
        cussVersions: string[];
        cussInterfaceVersions: string[];
        osName: string;
        osVersion: string;
        /**
         * Time for application initialization (in milliseconds)
         * @member {Number} initTimeout
         */
        initTimeout: any;
    }
}
