declare module "CodeStubsGenerationApi" {
    /**
    * CodeStubsGeneration service.
    * @module api/CodeStubsGenerationApi
    * @version 1.0.0
    */
    export class CodeStubsGenerationApi {
        /**
        * Constructs a new CodeStubsGenerationApi.
        * @alias module:api/CodeStubsGenerationApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instanc
        e} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the dummyApplicationGet operation.
         * @callback moduleapi/CodeStubsGenerationApi~dummyApplicationGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/ApplicationData{ data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * A dummy end-point definition to motivate Open API code generators to generate all required code stubs. - Since the move to WebSocket communication and the removal of the former endpoint definitions these dummies became necessary. - Platforms do not implement nor provide these endpoint to applications.
         * @param {module:api/CodeStubsGenerationApi~dummyApplicationGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
         */
        dummyApplicationGet(callback: any): any;
        /**
         * Callback function to receive the result of the dummyPlatformGet operation.
         * @callback moduleapi/CodeStubsGenerationApi~dummyPlatformGetCallback
         * @param {String} error Error message, if any.
         * @param {module:model/PlatformData{ data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */
        /**
         * A dummy end-point definition to motivate Open API code generators to generate all required code stubs. - Since the move to WebSocket communication and the removal of the former endpoint definitions these dummies became necessary. - Platforms do not implement nor provide these endpoint to applications.
         * @param {module:api/CodeStubsGenerationApi~dummyPlatformGetCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
         */
        dummyPlatformGet(callback: any): any;
    }
}
