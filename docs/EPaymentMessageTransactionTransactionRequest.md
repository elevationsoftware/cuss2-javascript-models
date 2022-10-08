# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageTransactionTransactionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **String** |  | [optional] 
**environment** | [**EPaymentMessageTransactionTransactionRequestEnvironment**](EPaymentMessageTransactionTransactionRequestEnvironment.md) |  | [optional] 
**preAuth** | [**EPaymentMessageTransactionTransactionRequestPreAuth**](EPaymentMessageTransactionTransactionRequestPreAuth.md) |  | [optional] 
**account** | [**EPaymentMessageTransactionTransactionRequestAccount**](EPaymentMessageTransactionTransactionRequestAccount.md) |  | [optional] 
**itinerary** | [**EPaymentMessageTransactionTransactionRequestItinerary**](EPaymentMessageTransactionTransactionRequestItinerary.md) |  | [optional] 
**billingDescription** | **String** | Descriptive billing information. This optional value lets the CUSS application suggest a value that will appear on the kiosk application user’s payment summary (monthly bill, etc.) as an extended description of the transaction. The value may or may not appear on the customer’s bill depending on the capabilities of the airport and customer’s banking systems. Long data may be truncated.  The platform may also be used as an additional tracking mechanism for other systems such as aggregator and reconciliation infrastructure. | [optional] 
**gpParameters** | [**GPParameterList**](GPParameterList.md) |  | [optional] 
**authorizationAmounts** | [**AuthorizationAmounts**](AuthorizationAmounts.md) |  | [optional] 
