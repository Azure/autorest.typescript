import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { HubVirtualNetworkConnection, HubVirtualNetworkConnectionsListOptionalParams, HubVirtualNetworkConnectionsGetOptionalParams, HubVirtualNetworkConnectionsGetResponse } from "../models";
/** Interface representing a HubVirtualNetworkConnections. */
export interface HubVirtualNetworkConnections {
    /**
     * Retrieves the details of all HubVirtualNetworkConnections.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: HubVirtualNetworkConnectionsListOptionalParams): PagedAsyncIterableIterator<HubVirtualNetworkConnection>;
    /**
     * Retrieves the details of a HubVirtualNetworkConnection.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: HubVirtualNetworkConnectionsGetOptionalParams): Promise<HubVirtualNetworkConnectionsGetResponse>;
}
//# sourceMappingURL=hubVirtualNetworkConnections.d.ts.map