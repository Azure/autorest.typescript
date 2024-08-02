# ServiceDriven client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for ServiceDriven client.

Test that we can grow up a service spec and service deployment into a multi-versioned service with full client support.

There are three concepts that should be clarified:
1. Client spec version: refers to the spec that the client is generated from. 'v1' is a client generated from old.tsp and 'v2' is a client generated from main.tsp.
2. Service deployment version: refers to a deployment version of the service. 'v1' represents the initial deployment of the service with a single api version. 'v2' represents the new deployment of a service with multiple api versions
3. Api version: The initial deployment of the service only supports api version 'v1'. The new deployment of the service supports api versions 'v1' and 'v2'.

We test the following configurations from this service spec:
- A client generated from the second service spec can call the second deployment of a service with api version v1
- A client generated from the second service spec can call the second deployment of a service with api version v2

[Package (NPM)](https://www.npmjs.com/package/@msinternal/srv-driven-main) |

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md) for more details.


### Install the `@msinternal/srv-driven-main` package

Install the ServiceDriven client library for JavaScript with `npm`:

```bash
npm install @msinternal/srv-driven-main
```



### JavaScript Bundle
To use this client library in the browser, first you need to use a bundler. For details on how to do this, please refer to our [bundling documentation](https://aka.ms/AzureSDKBundling).

## Key concepts

### ServiceDrivenClient

`ServiceDrivenClient` is the primary interface for developers using the ServiceDriven client library. Explore the methods on this client object to understand the different features of the ServiceDriven service that you can access.

