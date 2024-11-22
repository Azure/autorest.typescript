# PurviewAdministrationRest REST client library for JavaScript

Purview Account Client

**Please rely heavily on [the service's documentation](https://azure.microsoft.com/en-us/services/purview/) and our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library**

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@msinternal/purview-administration-rest)
- [Product documentation](https://azure.microsoft.com/en-us/services/purview/)

## Getting started

### Currently supported environments

- LTS versions of Node.js

### Prerequisites

- You must have an [Azure subscription](https://azure.microsoft.com/free/) and follow [these](https://docs.microsoft.com/azure/purview/create-catalog-portal#add-a-security-principal-to-a-data-plane-role) instructions to use this package.

### Install the `@msinternal/purview-administration-rest` package

Install the PurviewAdministrationRest REST client REST client library for JavaScript with `npm`:

```bash
npm install @msinternal/purview-administration-rest
```

### Create and authenticate a `PurviewAccountClient`

To use an [Azure Active Directory (AAD) token credential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/samples/AzureIdentityExamples.md#authenticating-with-a-pre-fetched-access-token),
provide an instance of the desired credential type obtained from the
[@azure/identity](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) library.

To authenticate with AAD, you must first `npm` install [`@azure/identity`](https://www.npmjs.com/package/@azure/identity) and
[enable AAD authentication on your Purview resource](https://docs.microsoft.com/azure/purview/create-catalog-portal#add-a-security-principal-to-a-data-plane-role)

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
