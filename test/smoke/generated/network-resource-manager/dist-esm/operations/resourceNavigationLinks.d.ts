import { ResourceNavigationLinks } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { ResourceNavigationLinksListOptionalParams, ResourceNavigationLinksListResponse } from "../models";
/** Class representing a ResourceNavigationLinks. */
export declare class ResourceNavigationLinksImpl implements ResourceNavigationLinks {
    private readonly client;
    /**
     * Initialize a new instance of the class ResourceNavigationLinks class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets a list of resource navigation links for a subnet.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: ResourceNavigationLinksListOptionalParams): Promise<ResourceNavigationLinksListResponse>;
}
//# sourceMappingURL=resourceNavigationLinks.d.ts.map