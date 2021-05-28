# Azure Search client library for JavaScript

This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Azure Search client.

Client that can be used to query an index and upload, merge, or delete documents.

[Package (NPM)](https://www.npmjs.com/package/@azure/search-documents) |
[API reference documentation](https://docs.microsoft.com/javascript/api/@azure/search-documents) |

## Getting started

### Currently supported environments

- Node.js version 10.x.x or higher
- Browser JavaScript

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure/search-documents` package

Install the Azure Search client library for JavaScript with `npm`:

```bash
npm install @azure/search-documents
```

### Create and authenticate a `SearchClient`

To create a client object to access the Azure Search API, you will need the `endpoint` of your Azure Search resource and a `credential`. The Azure Search client can use Azure Active Directory credentials to authenticate.
You can find the endpoint for your Azure Search resource in the [Azure Portal][azure_portal].


## Key concepts

### SearchClient

`SearchClient` is the primary interface for developers using the Azure Search client library. Explore the methods on this client object to understand the different features of the Azure Search service that you can access.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";
setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/logger).


## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/master/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)


[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#defaultazurecredential
