# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.EPaymentMessageOperation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationDocumentType** | [**OperationDocumentType**](OperationDocumentType.md) |  | 
**operationDocumentReturnType** | [**OperationDocumentType**](OperationDocumentType.md) |  | [optional] 
**operationType** | **String** |  | 
**operationRequest** | **String** | Some requests may require additional qualifying data, but those that do not are not required to explicitly include this element. | [optional] 
**operationResponse** | **String** |  | [optional] 

<a name="OperationTypeEnum"></a>
## Enum: OperationTypeEnum

* `SYSTEM_HEALTH` (value: `"SYSTEM_HEALTH"`)


<a name="OperationResponseEnum"></a>
## Enum: OperationResponseEnum

* `OFFLINE` (value: `"OFFLINE"`)
* `ONLINE` (value: `"ONLINE"`)

