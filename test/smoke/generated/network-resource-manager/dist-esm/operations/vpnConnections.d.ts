import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VpnConnections } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { VpnConnection, VpnConnectionsListByVpnGatewayOptionalParams, VpnConnectionsGetOptionalParams, VpnConnectionsGetResponse, VpnConnectionsCreateOrUpdateOptionalParams, VpnConnectionsCreateOrUpdateResponse, VpnConnectionsDeleteOptionalParams } from "../models";
/** Class representing a VpnConnections. */
export declare class VpnConnectionsImpl implements VpnConnections {
    private readonly client;
    /**
     * Initialize a new instance of the class VpnConnections class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Retrieves all vpn connections for a particular virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    listByVpnGateway(resourceGroupName: string, gatewayName: string, options?: VpnConnectionsListByVpnGatewayOptionalParams): PagedAsyncIterableIterator<VpnConnection>;
    private listByVpnGatewayPagingPage;
    private listByVpnGatewayPagingAll;
    /**
     * Retrieves the details of a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsGetOptionalParams): Promise<VpnConnectionsGetResponse>;
    /**
     * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
     * connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, connectionName: string, vpnConnectionParameters: VpnConnection, options?: VpnConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnConnectionsCreateOrUpdateResponse>, VpnConnectionsCreateOrUpdateResponse>>;
    /**
     * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
     * connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, gatewayName: string, connectionName: string, vpnConnectionParameters: VpnConnection, options?: VpnConnectionsCreateOrUpdateOptionalParams): Promise<VpnConnectionsCreateOrUpdateResponse>;
    /**
     * Deletes a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves all vpn connections for a particular virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    private _listByVpnGateway;
    /**
     * ListByVpnGatewayNext
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param nextLink The nextLink from the previous successful call to the ListByVpnGateway method.
     * @param options The options parameters.
     */
    private _listByVpnGatewayNext;
}
//# sourceMappingURL=vpnConnections.d.ts.map