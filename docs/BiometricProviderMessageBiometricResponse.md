# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.BiometricProviderMessageBiometricResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responseType** | **String** |  | 
**failureReason** | [**BiometricProviderMessageBiometricResponseFailureReason**](BiometricProviderMessageBiometricResponseFailureReason.md) |  | [optional] 
**passengerData** | [**PassengerDataType**](PassengerDataType.md) |  | [optional] 
**gpDataList** | [**GPDataListType**](GPDataListType.md) |  | [optional] 

<a name="ResponseTypeEnum"></a>
## Enum: ResponseTypeEnum

* `CANCELLATION` (value: `"CANCELLATION"`)
* `FAILURE` (value: `"FAILURE"`)
* `NOTIFICATION` (value: `"NOTIFICATION"`)
* `SUCCESS` (value: `"SUCCESS"`)

