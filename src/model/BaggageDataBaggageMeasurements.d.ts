declare module "model/BaggageDataBaggageMeasurements" {
    /**
     * The BaggageDataBaggageMeasurements model module.
     * @module model/BaggageDataBaggageMeasurements
     * @version 1.0.0
     */
    export class BaggageDataBaggageMeasurements {
        /**
         * Constructs a <code>BaggageDataBaggageMeasurements</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/BaggageDataBaggageMeasurements} obj Optional instance to populate.
         * @return {module:model/BaggageDataBaggageMeasurements} The populated <code>BaggageDataBaggageMeasurements</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * @member {module:model/WeightType} weight
         */
        weight: any;
        /**
         * @member {module:model/DimensionType} dimensions
         */
        dimensions: any;
    }
}
