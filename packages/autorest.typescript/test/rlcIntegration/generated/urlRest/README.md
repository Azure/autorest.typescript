# UrlRest REST client library for JavaScript

Test Infrastructure for AutoRest

**If you are not familiar with our REST client, please spend 5 minutes to take a look at our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library, the REST client provides a light-weighted & developer friendly way to call azure rest api

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@msinternal/url-rest)

## Getting started

### Currently supported environments

- LTS versions of Node.js

### Prerequisites

- You must have an [Azure subscription](https://azure.microsoft.com/free/) to use this package.

### Install the `@msinternal/url-rest` package

Install the UrlRest REST client REST client library for JavaScript with `npm`:

```bash
npm install @msinternal/url-rest
```

### Create and authenticate a `UrlRestClient`

To use an [Azure Active Directory (AAD) token credential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token),
provide an instance of the desired credential type obtained from the
[@azure/identity](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) library.

To authenticate with AAD, you must first `npm` install [`@azure/identity`](https://www.npmjs.com/package/@azure/identity) 

After setup, you can choose which type of [credential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) from `@azure/identity` to use.
As an example, [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential)
can be used to authenticate the client.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).
