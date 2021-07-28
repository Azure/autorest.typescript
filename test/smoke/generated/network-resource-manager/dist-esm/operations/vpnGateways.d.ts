import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VpnGateways } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { VpnGateway, VpnGatewaysListByResourceGroupOptionalParams, VpnGatewaysListOptionalParams, VpnGatewaysGetOptionalParams, VpnGatewaysGetResponse, VpnGatewaysCreateOrUpdateOptionalParams, VpnGatewaysCreateOrUpdateResponse, TagsObject, VpnGatewaysUpdateTagsOptionalParams, VpnGatewaysUpdateTagsResponse, VpnGatewaysDeleteOptionalParams, VpnGatewaysResetOptionalParams, VpnGatewaysResetResponse } from "../models";
/** Class representing a VpnGateways. */
export declare class VpnGatewaysImpl implements VpnGateways {
    private readonly client;
    /**
     * Initialize a new instance of the class VpnGateways class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Lists all the VpnGateways in a resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VpnGatewaysListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VpnGateway>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Lists all the VpnGateways in a subscription.
     * @param options The options parameters.
     */
    list(options?: VpnGatewaysListOptionalParams): PagedAsyncIterableIterator<VpnGateway>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Retrieves the details of a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysGetOptionalParams): Promise<VpnGatewaysGetResponse>;
    /**
     * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: VpnGateway, options?: VpnGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnGatewaysCreateOrUpdateResponse>, VpnGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: VpnGateway, options?: VpnGatewaysCreateOrUpdateOptionalParams): Promise<VpnGatewaysCreateOrUpdateResponse>;
    /**
     * Updates virtual wan vpn gateway tags.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: TagsObject, options?: VpnGatewaysUpdateTagsOptionalParams): Promise<VpnGatewaysUpdateTagsResponse>;
    /**
     * Deletes a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Resets the primary of the vpn gateway in the specified resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginReset(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysResetOptionalParams): Promise<PollerLike<PollOperationState<VpnGatewaysResetResponse>, VpnGatewaysResetResponse>>;
    /**
     * Resets the primary of the vpn gateway in the specified resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginResetAndWait(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysResetOptionalParams): Promise<VpnGatewaysResetResponse>;
    /**
     * Lists all the VpnGateways in a resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Lists all the VpnGateways in a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=vpnGateways.d.ts.map