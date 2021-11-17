# A generated TypeScript SDK samples for @msinternal/keyvault-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/keyvault-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [createANewVaultOrUpdateAnExistingVault.ts][createANewVaultOrUpdateAnExistingVault] | Create or update a key vault in the specified subscription. |  
| [createOrUpdateAVaultWithNetworkAcls.ts][createOrUpdateAVaultWithNetworkAcls] | Create or update a key vault in the specified subscription. |  
| [updateAnExistingVault.ts][updateAnExistingVault] | Update a key vault in the specified subscription. |  
| [deleteAVault.ts][deleteAVault] | Deletes the specified Azure key vault. |  
| [retrieveAVault.ts][retrieveAVault] | Gets the specified Azure key vault. |  
| [addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions.ts][addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions] | Update access policies in a key vault in the specified subscription. |  
| [listVaultsInTheSpecifiedResourceGroup.ts][listVaultsInTheSpecifiedResourceGroup] | The List operation gets information about the vaults associated with the subscription and within the specified resource group. |  
| [listVaultsInTheSpecifiedSubscription.ts][listVaultsInTheSpecifiedSubscription] | The List operation gets information about the vaults associated with the subscription. |  
| [listDeletedVaultsInTheSpecifiedSubscription.ts][listDeletedVaultsInTheSpecifiedSubscription] | Gets information about the deleted vaults in a subscription. |  
| [retrieveADeletedVault.ts][retrieveADeletedVault] | Gets the deleted Azure key vault. |  
| [purgeADeletedVault.ts][purgeADeletedVault] | Permanently deletes the specified vault. aka Purges the deleted Azure key vault. |  
| [listVaultsInTheSpecifiedSubscription.ts][listVaultsInTheSpecifiedSubscription] | The List operation gets information about the vaults associated with the subscription. |  
| [validateAVaultName.ts][validateAVaultName] | Checks that the vault name is valid and is not already in use. |  
| [keyVaultGetPrivateEndpointConnection.ts][keyVaultGetPrivateEndpointConnection] | Gets the specified private endpoint connection associated with the key vault. |  
| [keyVaultPutPrivateEndpointConnection.ts][keyVaultPutPrivateEndpointConnection] | Updates the specified private endpoint connection associated with the key vault. |  
| [keyVaultDeletePrivateEndpointConnection.ts][keyVaultDeletePrivateEndpointConnection] | Deletes the specified private endpoint connection associated with the key vault. |  
| [keyVaultListPrivateLinkResources.ts][keyVaultListPrivateLinkResources] | Gets the private link resources supported for the key vault. |  
| [listsAvailableRestApiOperations.ts][listsAvailableRestApiOperations] | Lists all of the available Key Vault Rest API operations. |  

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
node dist/createANewVaultOrUpdateAnExistingVault.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[createANewVaultOrUpdateAnExistingVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createANewVaultOrUpdateAnExistingVault.ts  
[createOrUpdateAVaultWithNetworkAcls]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateAVaultWithNetworkAcls.ts  
[updateAnExistingVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAnExistingVault.ts  
[deleteAVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAVault.ts  
[retrieveAVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveAVault.ts  
[addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/addAnAccessPolicyOrUpdateAnAccessPolicyWithNewPermissions.ts  
[listVaultsInTheSpecifiedResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVaultsInTheSpecifiedResourceGroup.ts  
[listVaultsInTheSpecifiedSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVaultsInTheSpecifiedSubscription.ts  
[listDeletedVaultsInTheSpecifiedSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDeletedVaultsInTheSpecifiedSubscription.ts  
[retrieveADeletedVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/retrieveADeletedVault.ts  
[purgeADeletedVault]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/purgeADeletedVault.ts  
[listVaultsInTheSpecifiedSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVaultsInTheSpecifiedSubscription.ts  
[validateAVaultName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/validateAVaultName.ts  
[keyVaultGetPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/keyVaultGetPrivateEndpointConnection.ts  
[keyVaultPutPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/keyVaultPutPrivateEndpointConnection.ts  
[keyVaultDeletePrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/keyVaultDeletePrivateEndpointConnection.ts  
[keyVaultListPrivateLinkResources]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/keyVaultListPrivateLinkResources.ts  
[listsAvailableRestApiOperations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAvailableRestApiOperations.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/keyvault-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
