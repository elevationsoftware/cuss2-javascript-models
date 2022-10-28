# CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.PlatformCommunicationApi

All URIs are relative to *https://virtserver.swaggerhub.com/elevatedapis/CUSS2-API/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**platformSubscribeGet**](PlatformCommunicationApi.md#platformSubscribeGet) | **GET** /platform/subscribe | 

<a name="platformSubscribeGet"></a>
# **platformSubscribeGet**
> platformSubscribeGet()



**MANDATORY!** - This is the **first directive** to be issued by the application to establish the channel for return codes, directive results and unsolicited events.&lt;p&gt;To establish a return channel to the application an application shall call this directive with&lt;p&gt;**wss://cuss.iata.com:22222/platform/subscribe**&lt;p&gt;instead of using the normal **&#x27;&#x27;https://&#x27;&#x27;** signature.&lt;p&gt;After the listener socket connection has been established, the application provides its previously acquired authentication token to the platform across that encrypted connection. This is achieved by a simple data transmission of the token as the payload in a predefined JSON structure, from the application to the platform. There is no prescribed or required time window between connection establishment and token transmission, but a platform may choose to implement a scheme whereby the socket is closed should no token be received within a given timeframe. It is highly recommended that transmission of the token be completed immediately after the socket connection has completed. 

### Example
```javascript
import {CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion} from 'common_use_self_service_v2_api_definition__current_working_version.js';
let defaultClient = CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.ApiClient.instance;

// Configure OAuth2 access token for authorization: application
let application = defaultClient.authentications['application'];
application.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new CommonUseSelfServiceV2ApiDefinitionCurrentWorkingVersion.PlatformCommunicationApi();
apiInstance.platformSubscribeGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[application](../README.md#application)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

