import { VpnServerConfigurationsAssociatedWithVirtualWan } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams, VpnServerConfigurationsAssociatedWithVirtualWanListResponse } from "../models";
/** Class representing a VpnServerConfigurationsAssociatedWithVirtualWan. */
export declare class VpnServerConfigurationsAssociatedWithVirtualWanImpl implements VpnServerConfigurationsAssociatedWithVirtualWan {
    private readonly client;
    /**
     * Initialize a new instance of the class VpnServerConfigurationsAssociatedWithVirtualWan class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param options The options parameters.
     */
    beginList(resourceGroupName: string, virtualWANName: string, options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams): Promise<PollerLike<PollOperationState<VpnServerConfigurationsAssociatedWithVirtualWanListResponse>, VpnServerConfigurationsAssociatedWithVirtualWanListResponse>>;
    /**
     * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param options The options parameters.
     */
    beginListAndWait(resourceGroupName: string, virtualWANName: string, options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams): Promise<VpnServerConfigurationsAssociatedWithVirtualWanListResponse>;
}
//# sourceMappingURL=vpnServerConfigurationsAssociatedWithVirtualWan.d.ts.map