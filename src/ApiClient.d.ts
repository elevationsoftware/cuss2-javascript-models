declare module "ApiClient" {
    export class ApiClient {
        /**
        * Parses an ISO-8601 string representation of a date value.
        * @param {String} str The date value as a string.
        * @returns {Date} The parsed date object.
        */
        static parseDate(str: string): Date;
        /**
        * Converts a value to the specified type.
        * @param {(String|Object)} data The data to convert, as a string or object.
        * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
        * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
        * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
        * all properties on <code>data<code> will be converted to this type.
        * @returns An instance of the specified type or null or undefined if data is null or undefined.
        */
        static convertToType(data: (string | any), type: (string | Array<string> | any | Function)): any;
        /**
        * Constructs a new map or array model from REST data.
        * @param data {Object|Array} The REST data.
        * @param obj {Object|Array} The target object or array.
        */
        static constructFromObject(data: any | any[], obj: any | any[], itemType: any): void;
    }
}
