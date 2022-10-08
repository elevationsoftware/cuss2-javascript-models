# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionDocumentType** | [**TransactionDocumentType**](TransactionDocumentType.md) |  | 
**transactionDocumentReturnType** | [**TransactionDocumentType**](TransactionDocumentType.md) |  | [optional] 
**transactionType** | **String** |  | 
**transactionRequest** | [**EPaymentMessageTransactionTransactionRequest**](EPaymentMessageTransactionTransactionRequest.md) |  | [optional] 
**transactionResponse** | [**EPaymentMessageTransactionTransactionResponse**](EPaymentMessageTransactionTransactionResponse.md) |  | [optional] 
**transactionAcknowledge** | [**EPaymentMessageTransactionTransactionAcknowledge**](EPaymentMessageTransactionTransactionAcknowledge.md) |  | [optional] 

<a name="TransactionTypeEnum"></a>
## Enum: TransactionTypeEnum

* `CANCEL` (value: `"CANCEL"`)
* `PRE_AUTH` (value: `"PRE_AUTH"`)
* `POST_AUTH` (value: `"POST_AUTH"`)
* `PURCHASE` (value: `"PURCHASE"`)
* `REFUND` (value: `"REFUND"`)
* `VOID_PURCHASE` (value: `"VOID_PURCHASE"`)
* `VOID_REFUND` (value: `"VOID_REFUND"`)

