# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.BiometricProviderMessageBiometricResponseFailureReason

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failureCode** | **String** | Eror code as received and mapped from the IMPs response. | 
**failureDescription** | **String** | Optional free form text describing the failure. | [optional] 

<a name="FailureCodeEnum"></a>
## Enum: FailureCodeEnum

* `FAILED` (value: `"FAILED"`)
* `TIMEOUT` (value: `"TIMEOUT"`)
* `CAMERA_ERROR` (value: `"CAMERA_ERROR"`)
* `INVALID_CONFIGURATION` (value: `"INVALID_CONFIGURATION"`)
* `MATCH_FAILED` (value: `"MATCH_FAILED"`)
* `NOT_IDENTIFIED` (value: `"NOT_IDENTIFIED"`)
* `POOR_CAMERA_IMAGE` (value: `"POOR_CAMERA_IMAGE"`)
* `POOR_DOCUMENT_IMAGE` (value: `"POOR_DOCUMENT_IMAGE"`)
* `DATA_SET_NOT_FOUND` (value: `"DATA_SET_NOT_FOUND"`)
* `FACE_NOT_DETECTED` (value: `"FACE_NOT_DETECTED"`)

