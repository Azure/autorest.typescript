import * as coreAuth from "@azure/core-auth";
import { Operations, Skus, StorageAccounts, Usages, ManagementPolicies, PrivateEndpointConnections, PrivateLinkResources, ObjectReplicationPolicies, EncryptionScopes, BlobServices, BlobContainers, FileServices, FileShares } from "./operationsInterfaces";
import { StorageManagementClientContext } from "./storageManagementClientContext";
import { StorageManagementClientOptionalParams } from "./models";
export declare class StorageManagementClient extends StorageManagementClientContext {
    /**
     * Initializes a new instance of the StorageManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: StorageManagementClientOptionalParams);
    operations: Operations;
    skus: Skus;
    storageAccounts: StorageAccounts;
    usages: Usages;
    managementPolicies: ManagementPolicies;
    privateEndpointConnections: PrivateEndpointConnections;
    privateLinkResources: PrivateLinkResources;
    objectReplicationPolicies: ObjectReplicationPolicies;
    encryptionScopes: EncryptionScopes;
    blobServices: BlobServices;
    blobContainers: BlobContainers;
    fileServices: FileServices;
    fileShares: FileShares;
}
//# sourceMappingURL=storageManagementClient.d.ts.map