# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageTransactionTransactionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responseType** | **String** |  | 
**approval** | [**EPaymentMessageTransactionTransactionResponseApproval**](EPaymentMessageTransactionTransactionResponseApproval.md) |  | [optional] 
**nonApproval** | [**EPaymentMessageTransactionTransactionResponseNonApproval**](EPaymentMessageTransactionTransactionResponseNonApproval.md) |  | [optional] 
**transactionStatus** | [**TransactionStatus**](TransactionStatus.md) |  | [optional] 

<a name="ResponseTypeEnum"></a>
## Enum: ResponseTypeEnum

* `APPROVAL` (value: `"APPROVAL"`)
* `CANCELLATION` (value: `"CANCELLATION"`)
* `DECLINE` (value: `"DECLINE"`)
* `FAILURE` (value: `"FAILURE"`)
* `STATUS` (value: `"STATUS"`)

