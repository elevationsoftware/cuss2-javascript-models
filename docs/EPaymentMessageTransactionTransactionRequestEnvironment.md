# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageTransactionTransactionRequestEnvironment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantID** | [**MerchantID**](MerchantID.md) |  | [optional] 
**location** | **String** | Common use kiosk/terminal/station identifier. May be reported on cardholder or reconciliation statements for informational purposes. | [optional] 
**cashier** | **String** | Agent/cashier (or pseudo-cashier) identifier. May be reported on cardholder or reconciliation statements for informational purposes. Some payment solutions may require this, but the component will synthesize a value if one is required but none is explicitly provided. | [optional] 
**orderReference** | **String** | Airline/merchant order, receipt or ticket reference number. May be reported on cardholder or reconciliation statements for informational purposes. | [optional] 
