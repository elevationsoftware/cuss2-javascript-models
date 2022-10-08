# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CommonUseBiometricMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentType** | **String** | The document type that is included in this message | 
**sessionID** | **String** | An arbitrary tracking value that the CUSS application chooses and assigns when starting a biometric provider function. The CUSS platform must then echo this requested value in all subsequent responses or asynchronous event messages related to that biometric provider function. This correlation permits a CUSS application to match and associate request and response messages and is critical for the case where an application has more than one multi-step biometric provider function ongoing concurrently. | [optional] 
**characteristics** | [**CommonUseBiometricMessageCharacteristics**](CommonUseBiometricMessageCharacteristics.md) |  | [optional] 
**biometricProviderMessage** | [**BiometricProviderMessage**](BiometricProviderMessage.md) |  | [optional] 
**errorResponse** | **String** | Error code as reported from the CUSS platform. | [optional] 

<a name="DocumentTypeEnum"></a>
## Enum: DocumentTypeEnum

* `CHARACTERISTICS` (value: `"CHARACTERISTICS"`)
* `BIOMETRIC_PROVIDER_MESSAGE` (value: `"BIOMETRIC_PROVIDER_MESSAGE"`)
* `ERROR_RESPONSE` (value: `"ERROR_RESPONSE"`)


<a name="ErrorResponseEnum"></a>
## Enum: ErrorResponseEnum

* `DATA_ERROR` (value: `"DATA_ERROR"`)
* `FORMAT_ERROR` (value: `"FORMAT_ERROR"`)
* `ILLOGICAL` (value: `"ILLOGICAL"`)

