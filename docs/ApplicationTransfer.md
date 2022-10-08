# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApplicationTransfer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transferRequestType** | **String** | Indicates whether to START an application or to CANCEL a pending transfer | 
**targetApplicationID** | [**ApplicationID**](ApplicationID.md) |  | 
**applicationBrand** | **String** | The application can use this value to change its look, feel, or behavior. | [optional] 
**languageID** | **String** | As per RFC3066.- Please refer also to: http://www.lingoes.net/en/translator/langcode.htm | 
**transferData** | **Blob** | Any data to be exchanged between callers and callees. | [optional] 

<a name="TransferRequestTypeEnum"></a>
## Enum: TransferRequestTypeEnum

* `START` (value: `"START"`)
* `CANCEL` (value: `"CANCEL"`)

