import { PrivateEndpointConnections } from "../operationsInterfaces";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { PrivateEndpointConnectionsGetOptionalParams, PrivateEndpointConnectionsGetResponse, PrivateEndpointConnection, PrivateEndpointConnectionsPutOptionalParams, PrivateEndpointConnectionsPutResponse, PrivateEndpointConnectionsDeleteOptionalParams, PrivateEndpointConnectionsDeleteResponse } from "../models";
/** Class representing a PrivateEndpointConnections. */
export declare class PrivateEndpointConnectionsImpl implements PrivateEndpointConnections {
    private readonly client;
    /**
     * Initialize a new instance of the class PrivateEndpointConnections class.
     * @param client Reference to the service client
     */
    constructor(client: KeyVaultManagementClientContext);
    /**
     * Gets the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsGetOptionalParams): Promise<PrivateEndpointConnectionsGetResponse>;
    /**
     * Updates the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param properties The intended state of private endpoint connection.
     * @param options The options parameters.
     */
    put(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, properties: PrivateEndpointConnection, options?: PrivateEndpointConnectionsPutOptionalParams): Promise<PrivateEndpointConnectionsPutResponse>;
    /**
     * Deletes the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointConnectionsDeleteResponse>, PrivateEndpointConnectionsDeleteResponse>>;
    /**
     * Deletes the specified private endpoint connection associated with the key vault.
     * @param resourceGroupName Name of the resource group that contains the key vault.
     * @param vaultName The name of the key vault.
     * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
     *                                      vault.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vaultName: string, privateEndpointConnectionName: string, options?: PrivateEndpointConnectionsDeleteOptionalParams): Promise<PrivateEndpointConnectionsDeleteResponse>;
}
//# sourceMappingURL=privateEndpointConnections.d.ts.map