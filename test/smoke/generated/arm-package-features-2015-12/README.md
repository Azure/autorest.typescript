# Feature client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Feature client.

Azure Feature Exposure Control (AFEC) provides a mechanism for the resource providers to control feature exposure to users. Resource providers typically use this mechanism to provide public/private preview for new features prior to making them generally available. Users need to explicitly register for AFEC features to get access to such functionality.

[Package (NPM)](https://www.npmjs.com/package/@msinternal/arm-package-features-2015-12) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.





### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### FeatureClient

`FeatureClient` is the primary interface for developers using the Feature client library. Explore the methods on this client object to understand the different features of the Feature service that you can access.

