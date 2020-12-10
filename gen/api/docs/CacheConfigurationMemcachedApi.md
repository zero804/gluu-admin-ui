# JansConfigApi.CacheConfigurationMemcachedApi

All URIs are relative to *https://jans.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfigCacheMemcached**](CacheConfigurationMemcachedApi.md#getConfigCacheMemcached) | **GET** /jans-config-api/api/v1/config/cache/memcached | Returns Memcached cache configuration.
[**putConfigCacheMemcached**](CacheConfigurationMemcachedApi.md#putConfigCacheMemcached) | **PUT** /jans-config-api/api/v1/config/cache/memcached | Updates Memcached cache configuration.



## getConfigCacheMemcached

> InlineResponse2001MemcachedConfiguration getConfigCacheMemcached()

Returns Memcached cache configuration.

Returns Memcached cache configuration.

### Example

```javascript
import JansConfigApi from 'jans_config_api';
let defaultClient = JansConfigApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: jans-auth
let jans-auth = defaultClient.authentications['jans-auth'];
jans-auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new JansConfigApi.CacheConfigurationMemcachedApi();
apiInstance.getConfigCacheMemcached((error, data, response) => {
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

[**InlineResponse2001MemcachedConfiguration**](InlineResponse2001MemcachedConfiguration.md)

### Authorization

[jans-auth](../README.md#jans-auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putConfigCacheMemcached

> InlineResponse2001MemcachedConfiguration putConfigCacheMemcached(opts)

Updates Memcached cache configuration.

Updates Memcached cache configuration.

### Example

```javascript
import JansConfigApi from 'jans_config_api';
let defaultClient = JansConfigApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: jans-auth
let jans-auth = defaultClient.authentications['jans-auth'];
jans-auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new JansConfigApi.CacheConfigurationMemcachedApi();
let opts = {
  'inlineObject': new JansConfigApi.InlineObject() // InlineObject | 
};
apiInstance.putConfigCacheMemcached(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse2001MemcachedConfiguration**](InlineResponse2001MemcachedConfiguration.md)

### Authorization

[jans-auth](../README.md#jans-auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
