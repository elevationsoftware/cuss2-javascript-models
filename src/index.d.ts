declare module "api/CodeStubsGenerationApi" {
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
declare module "api/PlatformCommunicationApi" {
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
declare module "index" {
    import { CodeStubsGenerationApi } from "api/CodeStubsGenerationApi";
    import { PlatformCommunicationApi } from "api/PlatformCommunicationApi";
    export { ApiClient, APIAcknowledgement, AckCodes, AgreementTextType, AlibiType, AmountType, ApplicationActivation, ApplicationData, ApplicationDataMeta, ApplicationDataPayload, ApplicationID, ApplicationState, ApplicationStateChangeReasonCodes, ApplicationStateCodes, ApplicationTransfer, ApprovalCode, AssociationDataItemType, AuthorizationAmounts, BaggageData, BaggageDataBaggageMeasurements, BaggageDataBarcodeTagList, BaggageDataRfidTagList, BarcodeTagDataType, BiometricAnyType, BiometricProviderMessage, BiometricProviderMessageBiometricRequest, BiometricProviderMessageBiometricRequestAgreementsList, BiometricProviderMessageBiometricRequestData, BiometricProviderMessageBiometricRequestDataProcessing, BiometricProviderMessageBiometricRequestEnvironment, BiometricProviderMessageBiometricResponse, BiometricProviderMessageBiometricResponseFailureReason, BiometricProviderMessageType, BlinkingRateType, CUSSDataTypes, CardBrand, CardBrandList, CardTrackType, CharacteristicsDocumentType, CommonUseBiometricMessage, CommonUseBiometricMessageCharacteristics, CommonUseBiometricMessageCharacteristicsCharacteristicsResponse, CommonUsePaymentMessage, CommonUsePaymentMessageCharacteristics, CommonUsePaymentMessageCharacteristicsCharacteristicsResponse, CommonUsePaymentMessageCharacteristicsCharacteristicsResponseEPayment, CommonUsePaymentMessageErrorResponse, ComponentCharacteristics, ComponentCharacteristicsConveyorSBD, ComponentCharacteristicsDeviceHelpInstruction, ComponentCharacteristicsDisplayType, ComponentCharacteristicsDocumentBin, ComponentCharacteristicsNavigationType, ComponentID, ComponentList, ComponentState, ComponentTypes, CurrencyCode, CurrencyCodeList, DataRecord, DataRecordList, DataStatus, DeviceHelpInstructionType, DeviceTypes, DimensionType, DsTypesEpayment, EPaymentMessage, EPaymentMessageOperation, EPaymentMessageSetup, EPaymentMessageTransaction, EPaymentMessageTransactionTransactionAcknowledge, EPaymentMessageTransactionTransactionRequest, EPaymentMessageTransactionTransactionRequestAccount, EPaymentMessageTransactionTransactionRequestAccountManual, EPaymentMessageTransactionTransactionRequestAccountSwipe, EPaymentMessageTransactionTransactionRequestEnvironment, EPaymentMessageTransactionTransactionRequestItinerary, EPaymentMessageTransactionTransactionRequestPreAuth, EPaymentMessageTransactionTransactionResponse, EPaymentMessageTransactionTransactionResponseApproval, EPaymentMessageTransactionTransactionResponseNonApproval, EnvironmentComponent, EnvironmentLevel, EventCategories, EventModes, EventTypes, ExtendedWeightType, Feature, FeatureList, GPDataItemType, GPDataListType, GPParameter, GPParameterList, IlluminationData, IlluminationDataLightColor, Location, MRZTrackType, MediaType, MediaTypeList, MediaTypes, MerchantID, NavigationTypes, OperationDocumentType, PassengerBiometricsType, PassengerDataType, PassengerDataTypeAssociationDataList, PassengerDataTypePassengerBiometricsData, PassengerDataTypePassengerMRZData, PassengerIDType, PassengerSessionID, PlatformData, PlatformDataMeta, PlatformDataMetaEventClassification, PlatformDataPayload, PlatformDirectives, RFIDElement, RFIDTagDataType, ReceiptData, RequestID, RgbType, ScreenResolution, MessageCodes, TransactionDocumentType, TransactionReference, TransactionStatus, WeightType, CodeStubsGenerationApi, PlatformCommunicationApi };
}
