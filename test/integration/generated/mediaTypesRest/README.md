# Service client library for JavaScript

Play with produces/consumes and media-types in general.

**Please rely heavily on our [REST client docs](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md) to use this library**

Key links:

- [Package (NPM)](https://www.npmjs.com/package/@msinternal/media-types-service-rest)
- [Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- Node.js version 14.x.x or higher

### Prerequisites

- You must have an [Azure subscription](https://docs.microsoft.com/en-us/azure/cognitive-services/authentication?tabs=powershell#authenticate-with-an-authentication-token) to use this package.

### Install the `@msinternal/media-types-service-rest` package

Install the Service client REST client library for JavaScript with `npm`:

```bash
npm install @msinternal/media-types-service-rest
```

### Create and authenticate a `MediaTypes`

To use an [Azure Active Directory (AAD) token credential](https://docs.microsoft.com/en-us/azure/cognitive-services/authentication?tabs=powershell#authenticate-with-an-authentication-token),
provide an instance of the desired credential type obtained from the
[@azure/identity](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) library.

To authenticate with AAD, you must first `npm` install [`@azure/identity`](https://www.npmjs.com/package/@azure/identity) 

After setup, you can choose which type of [credential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#credentials) from `@azure/identity` to use.
As an example, [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/identity/identity#defaultazurecredential)
can be used to authenticate the client:

Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables:
AZURE_CLIENT_ID, AZURE_TENANT_ID, AZURE_CLIENT_SECRET

Use the returned token credential to authenticate the client:

```typescript
import MediaTypes from "@azure-rest/purview-catalog";
import { DefaultAzureCredential } from "@azure/identity";
const client = MediaTypes(
  "<ENDPOINT>",
  new DefaultAzureCredential()
);
```

## Key concepts

### REST Client

This client is one of our REST clients. We highly recommend you read how to use a REST client [here](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/rest-clients.md).

## Examples

The following section shows you how to initialize and authenticate your client.


```typescript
import ExampleClient from "@azure-rest/example-client";
import { DefaultAzureCredential } from "@azure/identity";

const client = ExampleClient("https://example.org/", new DefaultAzureCredential());

// Send a GET request to https://example.org/hello
const response = await client.path("/hello").get();

if(response.status !== "200") {
  throw response.body.error;
}

console.log(response.body);
// {content: "Hello World"}
```

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).
