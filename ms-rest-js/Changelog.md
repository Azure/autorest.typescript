### 0.5.0 - 2018-05-08
- Replace BaseFilter type with RequestPolicy.
- Remove ServiceClient.pipeline() in favor of ServiceClient.sendRequest().

### 0.4.0 - 2018-05-03
- Added isomorphic-xml2js dependency to reduce browser package size
- Removed moment.js dependency, instead passing ISO 8601 strings for durations.

### 0.2.8 - 2018-04-02
- Relaxed validation for object types
- Relaxed handling of unrecognized polymorphic discriminator
- Added ApiKeyCredentials type

### 0.2.7 - 2018-03-23
- Updated moment to 2.21.0
- Added support to ensure that the provided Duration is a Duration like object. (based on ms-rest 2.3.2 in https://github.com/Azure/azure-sdk-for-node)

### 0.2.6 - 2018-02-22
- Added support for [de]serializing an "any" type (case when type is not present for an entity in the open api spec.). Resolves https://github.com/Azure/autorest/issues/2855
- Updated dependency versions

### 0.2.5 - 2018-01-25
- Compiled target to `ES5` for supporting IE11 #13.

### 0.2.4 - 2018-01-24
- Removed dependency on detect-node and added a utility method to detect whether the app is being executed in a node.js environment. Fixes #10.

### 0.2.3 - 2017-10-25
- We will return the actual response when the return type of a method in the generated code is `stream`.
Hence, removing `bodyAsStream` property from `HttpOperationResponse`.

### 0.2.2 - 2017-10-17
- replacing eval by traversing recursively in the object.

### 0.2.1 - 2017-10-10
- moment version 2.19.0 has lot of issues. Hence fixing the dependency strictly to 2.18.1.
### 0.2.0 - 2017-10-10
- Reverting the change made in #2.

### 0.1.0 - 2017-09-16
- Initial version of ms-rest-js
  - Provides support for basic credentials
  - Supports serialization and deserialization of basic and complex types
  - Supports sending requests in the node environment and also in the browser
  - Builds the request pipeline by adding predefined filters
  - Provides mechanism to add custom flters in the pipeline
  - Provides a bundled file named [msRestBundle.js](./msRestBundle.js) that can be used in the browser
  - Please take a look at the [samples](./samples) directory for node and browser samples
