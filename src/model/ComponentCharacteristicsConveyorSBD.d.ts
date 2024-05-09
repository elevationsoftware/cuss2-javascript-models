
declare module "model/ComponentCharacteristicsConveyorSBD" {
    /**
     * The ComponentCharacteristicsConveyorSBD model module.
     * @module model/ComponentCharacteristicsConveyorSBD
     * @version 1.0.0
     */
    export class ComponentCharacteristicsConveyorSBD {
        /**
         * Constructs a <code>ComponentCharacteristicsConveyorSBD</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/ComponentCharacteristicsConveyorSBD} obj Optional instance to populate.
         * @return {module:model/ComponentCharacteristicsConveyorSBD} The populated <code>ComponentCharacteristicsConveyorSBD</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * The maximum weight of the baggage (in grams).
         * @member {Number} maxWeight
         */
        maxWeight: any;
        /**
         * The maximum width of baggage (in millimeters).
         * @member {Number} maxWidth
         */
        maxWidth: any;
        /**
         * The maximum height of baggage (in millimeters).
         * @member {Number} maxHeight
         */
        maxHeight: any;
        /**
         * The maximum length of baggage (in millimeters).
         * @member {Number} maxLength
         */
        maxLength: any;
        /**
         * The maximum number of bags a conveyor can handle.
         * @member {Number} maxBags
         */
        maxBags: any;
        /**
         * If true, conveyor has a security barrier (for user safety).
         * @member {Boolean} barrierCapable
         */
        barrierCapable: any;
        /**
         * If true, conveyor system can detect intrusions at the front/user side (insertion).
         * @member {Boolean} userInterferenceCapable
         */
        userInterferenceCapable: any;
        /**
         * If true, conveyor system can detect intrusions behind the front/user side (verification/parking).
         * @member {Boolean} safetyIntrusionCapable
         */
        safetyIntrusionCapable: any;
        /**
         * If true, conveyor can only move in forward direction.
         * @member {Boolean} onewayForward
         */
        onewayForward: any;
    }
}
