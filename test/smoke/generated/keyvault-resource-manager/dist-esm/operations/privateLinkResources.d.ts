import { PrivateLinkResources } from "../operationsInterfaces";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import { PrivateLinkResourcesListByVaultOptionalParams, PrivateLinkResourcesListByVaultResponse } from "../models";
/** Class representing a PrivateLinkResources. */
export declare class PrivateLinkResourcesImpl implements PrivateLinkResources {
    private readonly client;
    /**
     * Initialize a new instance of the class PrivateLinkResources class.
     * @param client Reference to the service client
     */
    constructor(client: KeyVaultManagementClientContext);
    /**
     * Gets the private link resources supported for the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param options The options parameters.
     */
    listByVault(resourceGroupName: string, vaultName: string, options?: PrivateLinkResourcesListByVaultOptionalParams): Promise<PrivateLinkResourcesListByVaultResponse>;
}
//# sourceMappingURL=privateLinkResources.d.ts.map