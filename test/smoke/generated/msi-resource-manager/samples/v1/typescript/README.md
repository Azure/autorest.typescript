# A generated TypeScript SDK samples for @msinternal/msi-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/msi-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [msiOperationsList.ts][msiOperationsList] | Gets the systemAssignedIdentity available under the specified RP scope. |  
| [msiOperationsList.ts][msiOperationsList] | Lists available operations for the Microsoft.ManagedIdentity provider |  
| [identityListBySubscription.ts][identityListBySubscription] | Lists all the userAssignedIdentities available under the specified subscription. |  
| [identityListByResourceGroup.ts][identityListByResourceGroup] | Lists all the userAssignedIdentities available under the specified ResourceGroup. |  
| [identityCreate.ts][identityCreate] | Create or update an identity in the specified subscription and resource group. |  
| [identityUpdate.ts][identityUpdate] | Update an identity in the specified subscription and resource group. |  
| [identityGet.ts][identityGet] | Gets the identity. |  
| [identityDelete.ts][identityDelete] | Deletes the identity. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/msiOperationsList.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[msiOperationsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/msiOperationsList.ts  
[msiOperationsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/msiOperationsList.ts  
[identityListBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityListBySubscription.ts  
[identityListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityListByResourceGroup.ts  
[identityCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityCreate.ts  
[identityUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityUpdate.ts  
[identityGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityGet.ts  
[identityDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/identityDelete.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/msi-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
