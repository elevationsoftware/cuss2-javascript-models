# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.BiometricProviderMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**biometricProviderMessageType** | [**BiometricProviderMessageType**](BiometricProviderMessageType.md) |  | 
**biometricProviderMessageReturnType** | [**BiometricProviderMessageType**](BiometricProviderMessageType.md) |  | 
**biometricFunctionType** | **String** | What type of biometric provider message this is. | 
**biometricRequest** | [**BiometricProviderMessageBiometricRequest**](BiometricProviderMessageBiometricRequest.md) |  | [optional] 
**biometricRequestData** | [**BiometricProviderMessageBiometricRequestData**](BiometricProviderMessageBiometricRequestData.md) |  | [optional] 
**biometricResponse** | [**BiometricProviderMessageBiometricResponse**](BiometricProviderMessageBiometricResponse.md) |  | [optional] 

<a name="BiometricFunctionTypeEnum"></a>
## Enum: BiometricFunctionTypeEnum

* `ASSOCIATE` (value: `"ASSOCIATE"`)
* `DISASSOCIATE` (value: `"DISASSOCIATE"`)
* `ENROLL` (value: `"ENROLL"`)
* `GET_ASSOCIATIONS` (value: `"GET_ASSOCIATIONS"`)
* `IDENTIFY` (value: `"IDENTIFY"`)
* `PREVIEW` (value: `"PREVIEW"`)
* `PURGE` (value: `"PURGE"`)
* `VERIFY` (value: `"VERIFY"`)

