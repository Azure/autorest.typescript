# Azure KeyVaultClient library for JavaScript

This package contains an isomorphic SDK for Azure KeyVaultClient.

The key vault client performs cryptographic key operations and vault operations against the Key Vault service.

[Source code](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined) |
[Package (NPM)](https://www.npmjs.com/package/@azure/keyvault-secrets) |
[API reference documentation](https://docs.microsoft.com/javascript/api/@azure/keyvault-secrets) |
[Samples](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined/samples)

## Getting started

### Currently supported environments

- Node.js version 8.x.x or higher
- Browser Javascript

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure/keyvault-secrets` package

Install the Azure KeyVaultClient library for Javascript with `npm`:

```bash
npm install @azure/keyvault-secrets
```

### Create and authenticate a `KeyVaultClient`

To create a client object to access the KeyVault API, you will need the `endpoint` of your KeyVault resource and a `credential`. The Azure KeyVaultClient can use Azure Active Directory credentials to authenticate.

You can find the endpoint for your KeyVault resource in the [Azure Portal][azure_portal].

#### Using an Azure Active Directory Credential

Client API key authentication is used in most of the examples, but you can also authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the `@azure/identity` package:

```bash
npm install @azure/identity
```

You will also need to register a new AAD application and grant access to KeyVault by assigning the suitable role to your service principal (note: roles such as `"Owner"` will not grant the necessary permissions).

Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

```javascript
const { KeyVaultClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");

const client = new KeyVaultClient("<endpoint>", new DefaultAzureCredential());
```

## Key concepts

### KeyVaultClient

`KeyVaultClient` is the primary interface for developers using the Azure KeyVaultClient library. It provides asynchronous methods to access a specific use of KeyVault.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/core/logger).

## Next steps

Please take a look at the [samples](https://github.com/Azure/azure-sdk-for-js/tree/master/undefined/samples) directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/master/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fundefined%2Fundefined%2FREADME.png)

[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#defaultazurecredential