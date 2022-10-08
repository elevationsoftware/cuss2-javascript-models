# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CodeStubsGenerationApi

All URIs are relative to *https://virtserver.swaggerhub.com/elevatedapis/CUSS2-API/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dummyApplicationGet**](CodeStubsGenerationApi.md#dummyApplicationGet) | **GET** /dummy/application | 
[**dummyPlatformGet**](CodeStubsGenerationApi.md#dummyPlatformGet) | **GET** /dummy/platform | 

<a name="dummyApplicationGet"></a>
# **dummyApplicationGet**
> ApplicationData dummyApplicationGet()



A dummy end-point definition to motivate Open API code generators to generate all required code stubs. - Since the move to WebSocket communication and the removal of the former endpoint definitions these dummies became necessary. - Platforms do not implement nor provide these endpoint to applications.

### Example
```javascript
import {CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion} from 'common_use_self_service_v2_api_definition__current_working_version';
let defaultClient = CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CodeStubsGenerationApi();
apiInstance.dummyApplicationGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ApplicationData**](ApplicationData.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dummyPlatformGet"></a>
# **dummyPlatformGet**
> PlatformData dummyPlatformGet()



A dummy end-point definition to motivate Open API code generators to generate all required code stubs. - Since the move to WebSocket communication and the removal of the former endpoint definitions these dummies became necessary. - Platforms do not implement nor provide these endpoint to applications.

### Example
```javascript
import {CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion} from 'common_use_self_service_v2_api_definition__current_working_version';
let defaultClient = CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.CodeStubsGenerationApi();
apiInstance.dummyPlatformGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PlatformData**](PlatformData.md)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

