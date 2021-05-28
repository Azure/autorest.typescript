# Azure SearchClient library for JavaScript

This package contains an isomorphic SDK (runs both in node.js and in browsers) for Azure SearchClient.

Client that can be used to query an index and upload, merge, or delete documents.

[Source code](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined) |
[Package (NPM)](https://www.npmjs.com/package/@azure/search-documents) |
[Samples](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined/samples)

## Getting started

### Currently supported environments

- Node.js version 8.x.x or higher
- Browser JavaScript

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure/search-documents` package

Install the Azure SearchClient library for JavaScript with `npm`:

```bash
npm install @azure/search-documents
```

### Create and authenticate a `SearchClient`

To create a client object to access the Search API, you will need the `endpoint` of your Search resource and a `credential`. The Azure SearchClient can use Azure Active Directory credentials to authenticate.
You can find the endpoint for your Search resource in the [Azure Portal][azure_portal].

#### Using an Azure Active Directory Credential

Client API key authentication is used in most of the examples, but you can also authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the `@azure/identity` package:

```bash
npm install @azure/identity
```

You will also need to register a new AAD application and grant access to Search by assigning the suitable role to your service principal (note: roles such as `"Owner"` will not grant the necessary permissions).
Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

```javascript
const { SearchClient } = require("@azure/search-documents");
const { DefaultAzureCredential } = require("@azure/identity");
const client = new SearchClient("<endpoint>", new DefaultAzureCredential());
```

## Key concepts

### SearchClient

`SearchClient` is the primary interface for developers using the Azure SearchClient library. Explore the methods on this client object to understand the different features of the Search service that you can access.

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";
setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/logger).;

## Next steps

Please take a look at the [samples](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined/samples) directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/master/CONTRIBUTING.md) to learn more about how to build and test the code.;

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)

[azure_sub]: https://azure.microsoft.com/free/
[Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fundefined%2Fundefined%2FREADME.png)
[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: 
[defaultazurecredential]: #defaultazurecredential
