import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VpnSiteLinkConnection, VpnLinkConnectionsListByVpnConnectionOptionalParams } from "../models";
/** Interface representing a VpnLinkConnections. */
export interface VpnLinkConnections {
    /**
     * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnLinkConnectionsListByVpnConnectionOptionalParams): PagedAsyncIterableIterator<VpnSiteLinkConnection>;
}
//# sourceMappingURL=vpnLinkConnections.d.ts.map