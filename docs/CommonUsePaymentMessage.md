# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CommonUsePaymentMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sessionID** | **String** | An arbitrary tracking value that the CUSS application chooses and assigns when starting a payment function. The CUSS platform must then echo this requested value in all subsequent responses or asynchronous event messages related to that payment function. This correlation permits a CUSS application to match and associate request and response messages and is critical for the case where an application has more than one multi-step payment function ongoing concurrently. | [optional] 
**documentType** | **String** | The document type that is included in this message | 
**characteristics** | [**CommonUsePaymentMessageCharacteristics**](CommonUsePaymentMessageCharacteristics.md) |  | [optional] 
**ePaymentMessage** | [**EPaymentMessage**](EPaymentMessage.md) |  | [optional] 
**errorResponse** | [**CommonUsePaymentMessageErrorResponse**](CommonUsePaymentMessageErrorResponse.md) |  | [optional] 

<a name="DocumentTypeEnum"></a>
## Enum: DocumentTypeEnum

* `CHARACTERISTICS` (value: `"CHARACTERISTICS"`)
* `EPAYMENT_MESSAGE` (value: `"EPAYMENT_MESSAGE"`)
* `ERROR_RESPONSE` (value: `"ERROR_RESPONSE"`)

