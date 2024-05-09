declare module "PlatformCommunicationApi" {
    /**
    * PlatformCommunication service.
    * @module api/PlatformCommunicationApi
    * @version 1.0.0
    */
    export class PlatformCommunicationApi {
        /**
        * Constructs a new PlatformCommunicationApi.
        * @alias module:api/PlatformCommunicationApi
        * @class
        * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
        * default to {@link module:ApiClient#instanc
        e} if unspecified.
        */
        constructor(apiClient?: any);
        apiClient: any;
        /**
         * Callback function to receive the result of the platformSubscribeGet operation.
         * @callback moduleapi/PlatformCommunicationApi~platformSubscribeGetCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */
        /**
         * **MANDATORY!** - This is the **first directive** to be issued by the application to establish the channel for return codes, directive results and unsolicited events.&lt;p&gt;To establish a return channel to the application an application shall call this directive with&lt;p&gt;**wss://cuss.iata.com:22222/platform/subscribe**&lt;p&gt;instead of using the normal **&#x27;&#x27;https://&#x27;&#x27;** signature.&lt;p&gt;After the listener socket connection has been established, the application provides its previously acquired authentication token to the platform across that encrypted connection. This is achieved by a simple data transmission of the token as the payload in a predefined JSON structure, from the application to the platform. There is no prescribed or required time window between connection establishment and token transmission, but a platform may choose to implement a scheme whereby the socket is closed should no token be received within a given timeframe. It is highly recommended that transmission of the token be completed immediately after the socket connection has completed.
         * @param {module:api/PlatformCommunicationApi~platformSubscribeGetCallback} callback The callback function, accepting three arguments: error, data, response
         */
        platformSubscribeGet(callback: any): any;
    }
}
