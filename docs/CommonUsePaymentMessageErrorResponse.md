# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CommonUsePaymentMessageErrorResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errorDocument** | **Blob** | Echo of unreadable or illogical document in base64 format. | [optional] 
**errorReason** | **String** | Human-readable reason that the document could not be processed by the component. | 
**errorCode** | **Number** | Error code as reported from the system(s) down the line. | 

<a name="ErrorReasonEnum"></a>
## Enum: ErrorReasonEnum

* `DATA_ERROR` (value: `"DATA_ERROR"`)
* `FORMAT_ERROR` (value: `"FORMAT_ERROR"`)
* `ILLOGICAL` (value: `"ILLOGICAL"`)

