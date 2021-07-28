import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { HubVirtualNetworkConnections } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { HubVirtualNetworkConnection, HubVirtualNetworkConnectionsListOptionalParams, HubVirtualNetworkConnectionsGetOptionalParams, HubVirtualNetworkConnectionsGetResponse } from "../models";
/** Class representing a HubVirtualNetworkConnections. */
export declare class HubVirtualNetworkConnectionsImpl implements HubVirtualNetworkConnections {
    private readonly client;
    /**
     * Initialize a new instance of the class HubVirtualNetworkConnections class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Retrieves the details of all HubVirtualNetworkConnections.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: HubVirtualNetworkConnectionsListOptionalParams): PagedAsyncIterableIterator<HubVirtualNetworkConnection>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Retrieves the details of a HubVirtualNetworkConnection.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: HubVirtualNetworkConnectionsGetOptionalParams): Promise<HubVirtualNetworkConnectionsGetResponse>;
    /**
     * Retrieves the details of all HubVirtualNetworkConnections.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=hubVirtualNetworkConnections.d.ts.map