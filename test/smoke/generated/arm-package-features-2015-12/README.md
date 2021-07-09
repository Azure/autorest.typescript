# Feature client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Feature client.

Azure Feature Exposure Control (AFEC) provides a mechanism for the resource providers to control feature exposure to users. Resource providers typically use this mechanism to provide public/private preview for new features prior to making them generally available. Users need to explicitly register for AFEC features to get access to such functionality.

[Package (NPM)](https://www.npmjs.com/package/arm-package-features-2015-12) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.


### Install the `arm-package-features-2015-12` package

Install the Feature client library for JavaScript with `npm`:

```bash
npm install arm-package-features-2015-12
```


## Key concepts

### FeatureClient

`FeatureClient` is the primary interface for developers using the Feature client library. Explore the methods on this client object to understand the different features of the Feature service that you can access.

