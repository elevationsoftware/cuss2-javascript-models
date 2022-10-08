# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApplicationState

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicationStateCode** | [**ApplicationStateCodes**](ApplicationStateCodes.md) |  | 
**accessibleMode** | **Boolean** | Indicates whether the application shall operate in ACCESSIBLE mode or not. | 
**applicationStateChangeReasonCode** | [**ApplicationStateChangeReasonCodes**](ApplicationStateChangeReasonCodes.md) |  | 
**applicationStateChangeReason** | **String** | The application can use this additional field to inform the platform about the reason for the current state change in free form text. The platform stores this information in its platform logs for bug fixing purposes. | [optional] 
**applicationBrand** | **String** | The platform can track which airline code to use for self activated processes/applications. | [optional] 
