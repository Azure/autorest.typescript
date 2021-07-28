import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VpnLinkConnections } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { VpnSiteLinkConnection, VpnLinkConnectionsListByVpnConnectionOptionalParams } from "../models";
/** Class representing a VpnLinkConnections. */
export declare class VpnLinkConnectionsImpl implements VpnLinkConnections {
    private readonly client;
    /**
     * Initialize a new instance of the class VpnLinkConnections class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnLinkConnectionsListByVpnConnectionOptionalParams): PagedAsyncIterableIterator<VpnSiteLinkConnection>;
    private listByVpnConnectionPagingPage;
    private listByVpnConnectionPagingAll;
    /**
     * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    private _listByVpnConnection;
    /**
     * ListByVpnConnectionNext
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param nextLink The nextLink from the previous successful call to the ListByVpnConnection method.
     * @param options The options parameters.
     */
    private _listByVpnConnectionNext;
}
//# sourceMappingURL=vpnLinkConnections.d.ts.map