# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageTransactionTransactionResponseApproval

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardholderReceiptPrinted** | **Boolean** |  | [optional] 
**merchantReceiptPrinted** | **Boolean** |  | [optional] 
**transactionReference** | [**TransactionReference**](TransactionReference.md) |  | [optional] 
**mediaType** | [**MediaType**](MediaType.md) |  | [optional] 
**approvalType** | **String** | Type of approval. | [optional] 
**signatureCapture** | **String** | For an approval that requires subsequent signature verification by the application, and where the component has electronic signature capture capability, the signature capture (PNG format) data in base64 representation. | [optional] 
**cardBrand** | **String** | Card brand name. | [optional] 
**cardPAN** | **String** | Secured (masked or truncated) card primary account number. | [optional] 
**approvalCode** | [**ApprovalCode**](ApprovalCode.md) |  | [optional] 
**gpParameters** | [**GPParameterList**](GPParameterList.md) |  | [optional] 
**authorizationAmounts** | [**AuthorizationAmounts**](AuthorizationAmounts.md) |  | 
**receiptData** | [**[ReceiptData]**](ReceiptData.md) |  | [optional] 

<a name="ApprovalTypeEnum"></a>
## Enum: ApprovalTypeEnum

* `NONE` (value: `"NONE"`)
* `PIN` (value: `"PIN"`)
* `SIGNATURE` (value: `"SIGNATURE"`)

