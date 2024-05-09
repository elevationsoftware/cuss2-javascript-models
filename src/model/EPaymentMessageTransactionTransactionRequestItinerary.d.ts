
declare module "model/EPaymentMessageTransactionTransactionRequestItinerary" {
    /**
     * The EPaymentMessageTransactionTransactionRequestItinerary model module.
     * @module model/EPaymentMessageTransactionTransactionRequestItinerary
     * @version 1.0.0
     */
    export class EPaymentMessageTransactionTransactionRequestItinerary {
        /**
         * Constructs a <code>EPaymentMessageTransactionTransactionRequestItinerary</code> from a plain JavaScript object, optionally creating a new instance.
         * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
         * @param {Object} data The plain JavaScript object bearing properties of interest.
         * @param {module:model/EPaymentMessageTransactionTransactionRequestItinerary} obj Optional instance to populate.
         * @return {module:model/EPaymentMessageTransactionTransactionRequestItinerary} The populated <code>EPaymentMessageTransactionTransactionRequestItinerary</code> instance.
         */
        static constructFromObject(data: any, obj: any): any;
        /**
         * Passenger name.
         * @member {String} name
         */
        name: any;
        /**
         * Passenger name record.
         * @member {String} pnr
         */
        pnr: any;
        /**
         * Transaction (flight) date (e.g. 2018-11-13).
         * @member {Date} _date
         */
        _date: any;
        /**
         * Airline identifier and flight number.
         * @member {String} flightNumber
         */
        flightNumber: any;
        /**
         * Departure city code.
         * @member {String} departureCity
         */
        departureCity: any;
        /**
         * Arrival city code.
         * @member {String} arrivalCity
         */
        arrivalCity: any;
    }
}
