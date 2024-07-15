# Multi client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Multi client.

Test that we can use @client and @operationGroup decorators to customize client side code structure, such as:
1. have everything as default.
2. to rename client or operation group
3. one client can have more than one operations groups
4. split one interface into two clients
5. have two clients with operations come from different interfaces
6. have two clients with a hierarchy relation.

[Package (NPM)](https://www.npmjs.com/package/@msinternal/client-structure-twoopgroup) |

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.





### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### ServiceClient

`ServiceClient` is the primary interface for developers using the Multi client library. Explore the methods on this client object to understand the different features of the Multi service that you can access.

