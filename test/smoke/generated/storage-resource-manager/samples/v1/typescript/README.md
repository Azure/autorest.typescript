# A generated TypeScript SDK samples for @msinternal/storage-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/storage-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [operationsList.ts][operationsList] | Lists all of the available Storage Rest API operations. |  
| [skuList.ts][skuList] | Lists the available SKUs supported by Microsoft.Storage for given subscription. |  
| [storageAccountCheckNameAvailability.ts][storageAccountCheckNameAvailability] | Checks that the storage account name is valid and is not already in use. |  
| [storageAccountCreate.ts][storageAccountCreate] | Asynchronously creates a new storage account with the specified parameters. If an account is already created and a subsequent create request is issued with different properties, the account properties will be updated. If an account is already created and a subsequent create or update request is issued with the exact same set of properties, the request will succeed. |  
| [storageAccountDelete.ts][storageAccountDelete] | Deletes a storage account in Microsoft Azure. |  
| [storageAccountGetProperties.ts][storageAccountGetProperties] | Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys. |  
| [storageAccountGetPropertiesCMKEnabled.ts][storageAccountGetPropertiesCMKEnabled] | Returns the properties for the specified storage account including but not limited to name, SKU name, location, and account status. The ListKeys operation should be used to retrieve storage keys. |  
| [storageAccountEnableAD.ts][storageAccountEnableAD] | The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation. |  
| [storageAccountEnableCMK.ts][storageAccountEnableCMK] | The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation. |  
| [storageAccountUpdate.ts][storageAccountUpdate] | The update operation can be used to update the SKU, encryption, access tier, or tags for a storage account. It can also be used to map the account to a custom domain. Only one custom domain is supported per storage account; the replacement/change of custom domain is not supported. In order to replace an old custom domain, the old value must be cleared/unregistered before a new value can be set. The update of multiple properties is supported. This call does not change the storage keys for the account. If you want to change the storage account keys, use the regenerate keys operation. The location and name of the storage account cannot be changed after creation. |  
| [storageAccountList.ts][storageAccountList] | Lists all the storage accounts available under the subscription. Note that storage keys are not returned; use the ListKeys operation for this. |  
| [storageAccountListByResourceGroup.ts][storageAccountListByResourceGroup] | Lists all the storage accounts available under the given resource group. Note that storage keys are not returned; use the ListKeys operation for this. |  
| [storageAccountListKeys.ts][storageAccountListKeys] | Lists the access keys or Kerberos keys (if active directory enabled) for the specified storage account. |  
| [storageAccountRegenerateKerbKey.ts][storageAccountRegenerateKerbKey] | Regenerates one of the access keys or Kerberos keys for the specified storage account. |  
| [storageAccountRegenerateKey.ts][storageAccountRegenerateKey] | Regenerates one of the access keys or Kerberos keys for the specified storage account. |  
| [storageAccountListAccountSAS.ts][storageAccountListAccountSAS] | List SAS credentials of a storage account. |  
| [storageAccountListServiceSAS.ts][storageAccountListServiceSAS] | List service SAS credentials of a specific resource. |  
| [storageAccountFailover.ts][storageAccountFailover] | Failover request can be triggered for a storage account in case of availability issues. The failover occurs from the storage account's primary cluster to secondary cluster for RA-GRS accounts. The secondary cluster will become primary after failover. |  
| [blobRangesRestore.ts][blobRangesRestore] | Restore blobs in the specified blob ranges |  
| [storageAccountRevokeUserDelegationKeys.ts][storageAccountRevokeUserDelegationKeys] | Revoke user delegation keys. |  
| [usageList.ts][usageList] | Gets the current usage count and the limit for the resources of the location under the subscription. |  
| [storageAccountGetManagementPolicies.ts][storageAccountGetManagementPolicies] | Gets the managementpolicy associated with the specified storage account. |  
| [storageAccountSetManagementPolicies.ts][storageAccountSetManagementPolicies] | Sets the managementpolicy to the specified storage account. |  
| [storageAccountDeleteManagementPolicies.ts][storageAccountDeleteManagementPolicies] | Deletes the managementpolicy associated with the specified storage account. |  
| [storageAccountListPrivateEndpointConnections.ts][storageAccountListPrivateEndpointConnections] | List all the private endpoint connections associated with the storage account. |  
| [storageAccountGetPrivateEndpointConnection.ts][storageAccountGetPrivateEndpointConnection] | Gets the specified private endpoint connection associated with the storage account. |  
| [storageAccountPutPrivateEndpointConnection.ts][storageAccountPutPrivateEndpointConnection] | Update the state of specified private endpoint connection associated with the storage account. |  
| [storageAccountDeletePrivateEndpointConnection.ts][storageAccountDeletePrivateEndpointConnection] | Deletes the specified private endpoint connection associated with the storage account. |  
| [storageAccountListPrivateLinkResources.ts][storageAccountListPrivateLinkResources] | Gets the private link resources that need to be created for a storage account. |  
| [storageAccountListObjectReplicationPolicies.ts][storageAccountListObjectReplicationPolicies] | List the object replication policies associated with the storage account. |  
| [storageAccountGetObjectReplicationPolicies.ts][storageAccountGetObjectReplicationPolicies] | Get the object replication policy of the storage account by policy ID. |  
| [storageAccountCreateObjectReplicationPolicyOnDestination.ts][storageAccountCreateObjectReplicationPolicyOnDestination] | Create or update the object replication policy of the storage account. |  
| [storageAccountCreateObjectReplicationPolicyOnSource.ts][storageAccountCreateObjectReplicationPolicyOnSource] | Create or update the object replication policy of the storage account. |  
| [storageAccountUpdateObjectReplicationPolicyOnDestination.ts][storageAccountUpdateObjectReplicationPolicyOnDestination] | Create or update the object replication policy of the storage account. |  
| [storageAccountUpdateObjectReplicationPolicyOnSource.ts][storageAccountUpdateObjectReplicationPolicyOnSource] | Create or update the object replication policy of the storage account. |  
| [storageAccountDeleteObjectReplicationPolicies.ts][storageAccountDeleteObjectReplicationPolicies] | Deletes the object replication policy associated with the specified storage account. |  
| [storageAccountPutEncryptionScope.ts][storageAccountPutEncryptionScope] | Synchronously creates or updates an encryption scope under the specified storage account. If an encryption scope is already created and a subsequent request is issued with different properties, the encryption scope properties will be updated per the specified request. |  
| [storageAccountPatchEncryptionScope.ts][storageAccountPatchEncryptionScope] | Update encryption scope properties as specified in the request body. Update fails if the specified encryption scope does not already exist. |  
| [storageAccountGetEncryptionScope.ts][storageAccountGetEncryptionScope] | Returns the properties for the specified encryption scope. |  
| [storageAccountEncryptionScopeList.ts][storageAccountEncryptionScopeList] | Lists all the encryption scopes available under the specified storage account. |  
| [listBlobServices.ts][listBlobServices] | List blob services of storage account. It returns a collection of one object named default. |  
| [putBlobServices.ts][putBlobServices] | Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.  |  
| [getBlobServices.ts][getBlobServices] | Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. |  
| [listContainers.ts][listContainers] | Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token. |  
| [putContainerWithDefaultEncryptionScope.ts][putContainerWithDefaultEncryptionScope] | Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container.  |  
| [putContainers.ts][putContainers] | Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container.  |  
| [updateContainers.ts][updateContainers] | Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.  |  
| [getContainers.ts][getContainers] | Gets properties of a specified container.  |  
| [deleteContainers.ts][deleteContainers] | Deletes specified container under its account. |  
| [setLegalHoldContainers.ts][setLegalHoldContainers] | Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request. |  
| [clearLegalHoldContainers.ts][clearLegalHoldContainers] | Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request. |  
| [createOrUpdateImmutabilityPolicy.ts][createOrUpdateImmutabilityPolicy] | Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation. |  
| [getImmutabilityPolicy.ts][getImmutabilityPolicy] | Gets the existing immutability policy along with the corresponding ETag in response headers and body. |  
| [deleteImmutabilityPolicy.ts][deleteImmutabilityPolicy] | Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, only way is to delete the container after deleting all blobs inside the container. |  
| [lockImmutabilityPolicy.ts][lockImmutabilityPolicy] | Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation. |  
| [extendImmutabilityPolicy.ts][extendImmutabilityPolicy] | Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation. |  
| [acquireALeaseOnAContainer.ts][acquireALeaseOnAContainer] | The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite. |  
| [breakALeaseOnAContainer.ts][breakALeaseOnAContainer] | The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite. |  
| [listFileServices.ts][listFileServices] | List all file services in storage accounts |  
| [putFileServices.ts][putFileServices] | Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules.  |  
| [getFileServices.ts][getFileServices] | Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource Sharing) rules. |  
| [listDeletedShares.ts][listDeletedShares] | Lists all shares. |  
| [listShares.ts][listShares] | Lists all shares. |  
| [createNfsShares.ts][createNfsShares] | Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.  |  
| [putShares.ts][putShares] | Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.  |  
| [putSharesWithAccessTier.ts][putSharesWithAccessTier] | Creates a new share under the specified account as described by request body. The share resource includes metadata and properties for that share. It does not include a list of the files contained by the share.  |  
| [updateShares.ts][updateShares] | Updates share properties as specified in request body. Properties not mentioned in the request will not be changed. Update fails if the specified share does not already exist.  |  
| [getShareStats.ts][getShareStats] | Gets properties of a specified share. |  
| [getShares.ts][getShares] | Gets properties of a specified share. |  
| [deleteShares.ts][deleteShares] | Deletes specified share under its account. |  
| [restoreShares.ts][restoreShares] | Restore a file share within a valid retention days if share soft delete is enabled |  

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
node dist/operationsList.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[operationsList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/operationsList.ts  
[skuList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/skuList.ts  
[storageAccountCheckNameAvailability]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountCheckNameAvailability.ts  
[storageAccountCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountCreate.ts  
[storageAccountDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountDelete.ts  
[storageAccountGetProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetProperties.ts  
[storageAccountGetPropertiesCMKEnabled]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetPropertiesCMKEnabled.ts  
[storageAccountEnableAD]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountEnableAD.ts  
[storageAccountEnableCMK]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountEnableCMK.ts  
[storageAccountUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountUpdate.ts  
[storageAccountList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountList.ts  
[storageAccountListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListByResourceGroup.ts  
[storageAccountListKeys]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListKeys.ts  
[storageAccountRegenerateKerbKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountRegenerateKerbKey.ts  
[storageAccountRegenerateKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountRegenerateKey.ts  
[storageAccountListAccountSAS]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListAccountSAS.ts  
[storageAccountListServiceSAS]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListServiceSAS.ts  
[storageAccountFailover]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountFailover.ts  
[blobRangesRestore]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/blobRangesRestore.ts  
[storageAccountRevokeUserDelegationKeys]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountRevokeUserDelegationKeys.ts  
[usageList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/usageList.ts  
[storageAccountGetManagementPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetManagementPolicies.ts  
[storageAccountSetManagementPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountSetManagementPolicies.ts  
[storageAccountDeleteManagementPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountDeleteManagementPolicies.ts  
[storageAccountListPrivateEndpointConnections]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListPrivateEndpointConnections.ts  
[storageAccountGetPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetPrivateEndpointConnection.ts  
[storageAccountPutPrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountPutPrivateEndpointConnection.ts  
[storageAccountDeletePrivateEndpointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountDeletePrivateEndpointConnection.ts  
[storageAccountListPrivateLinkResources]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListPrivateLinkResources.ts  
[storageAccountListObjectReplicationPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountListObjectReplicationPolicies.ts  
[storageAccountGetObjectReplicationPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetObjectReplicationPolicies.ts  
[storageAccountCreateObjectReplicationPolicyOnDestination]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountCreateObjectReplicationPolicyOnDestination.ts  
[storageAccountCreateObjectReplicationPolicyOnSource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountCreateObjectReplicationPolicyOnSource.ts  
[storageAccountUpdateObjectReplicationPolicyOnDestination]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountUpdateObjectReplicationPolicyOnDestination.ts  
[storageAccountUpdateObjectReplicationPolicyOnSource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountUpdateObjectReplicationPolicyOnSource.ts  
[storageAccountDeleteObjectReplicationPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountDeleteObjectReplicationPolicies.ts  
[storageAccountPutEncryptionScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountPutEncryptionScope.ts  
[storageAccountPatchEncryptionScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountPatchEncryptionScope.ts  
[storageAccountGetEncryptionScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountGetEncryptionScope.ts  
[storageAccountEncryptionScopeList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/storageAccountEncryptionScopeList.ts  
[listBlobServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listBlobServices.ts  
[putBlobServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putBlobServices.ts  
[getBlobServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getBlobServices.ts  
[listContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listContainers.ts  
[putContainerWithDefaultEncryptionScope]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putContainerWithDefaultEncryptionScope.ts  
[putContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putContainers.ts  
[updateContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateContainers.ts  
[getContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getContainers.ts  
[deleteContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteContainers.ts  
[setLegalHoldContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/setLegalHoldContainers.ts  
[clearLegalHoldContainers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/clearLegalHoldContainers.ts  
[createOrUpdateImmutabilityPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateImmutabilityPolicy.ts  
[getImmutabilityPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getImmutabilityPolicy.ts  
[deleteImmutabilityPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteImmutabilityPolicy.ts  
[lockImmutabilityPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/lockImmutabilityPolicy.ts  
[extendImmutabilityPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/extendImmutabilityPolicy.ts  
[acquireALeaseOnAContainer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/acquireALeaseOnAContainer.ts  
[breakALeaseOnAContainer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/breakALeaseOnAContainer.ts  
[listFileServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listFileServices.ts  
[putFileServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putFileServices.ts  
[getFileServices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFileServices.ts  
[listDeletedShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDeletedShares.ts  
[listShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listShares.ts  
[createNfsShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNfsShares.ts  
[putShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putShares.ts  
[putSharesWithAccessTier]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/putSharesWithAccessTier.ts  
[updateShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateShares.ts  
[getShareStats]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getShareStats.ts  
[getShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getShares.ts  
[deleteShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteShares.ts  
[restoreShares]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/restoreShares.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/storage-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
