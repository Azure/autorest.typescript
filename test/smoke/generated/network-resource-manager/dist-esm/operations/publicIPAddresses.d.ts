import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PublicIPAddresses } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { PublicIPAddress, PublicIPAddressesListAllOptionalParams, PublicIPAddressesListOptionalParams, PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams, PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams, PublicIPAddressesDeleteOptionalParams, PublicIPAddressesGetOptionalParams, PublicIPAddressesGetResponse, PublicIPAddressesCreateOrUpdateOptionalParams, PublicIPAddressesCreateOrUpdateResponse, TagsObject, PublicIPAddressesUpdateTagsOptionalParams, PublicIPAddressesUpdateTagsResponse, PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams, PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse } from "../models";
/** Class representing a PublicIPAddresses. */
export declare class PublicIPAddressesImpl implements PublicIPAddresses {
    private readonly client;
    /**
     * Initialize a new instance of the class PublicIPAddresses class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the public IP addresses in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: PublicIPAddressesListAllOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    private listAllPagingPage;
    private listAllPagingAll;
    /**
     * Gets all public IP addresses in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: PublicIPAddressesListOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    private listVirtualMachineScaleSetPublicIPAddressesPagingPage;
    private listVirtualMachineScaleSetPublicIPAddressesPagingAll;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a virtual
     * machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The network interface name.
     * @param ipConfigurationName The IP configuration name.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    private listVirtualMachineScaleSetVMPublicIPAddressesPagingPage;
    private listVirtualMachineScaleSetVMPublicIPAddressesPagingAll;
    /**
     * Deletes the specified public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified public IP address in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesGetOptionalParams): Promise<PublicIPAddressesGetResponse>;
    /**
     * Creates or updates a static or dynamic public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to the create or update public IP address operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: PublicIPAddress, options?: PublicIPAddressesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PublicIPAddressesCreateOrUpdateResponse>, PublicIPAddressesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a static or dynamic public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to the create or update public IP address operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, publicIpAddressName: string, parameters: PublicIPAddress, options?: PublicIPAddressesCreateOrUpdateOptionalParams): Promise<PublicIPAddressesCreateOrUpdateResponse>;
    /**
     * Updates public IP address tags.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to update public IP address tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: TagsObject, options?: PublicIPAddressesUpdateTagsOptionalParams): Promise<PublicIPAddressesUpdateTagsResponse>;
    /**
     * Gets all the public IP addresses in a subscription.
     * @param options The options parameters.
     */
    private _listAll;
    /**
     * Gets all public IP addresses in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param options The options parameters.
     */
    private _listVirtualMachineScaleSetPublicIPAddresses;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a virtual
     * machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The network interface name.
     * @param ipConfigurationName The IP configuration name.
     * @param options The options parameters.
     */
    private _listVirtualMachineScaleSetVMPublicIPAddresses;
    /**
     * Get the specified public IP address in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The name of the network interface.
     * @param ipConfigurationName The name of the IP configuration.
     * @param publicIpAddressName The name of the public IP Address.
     * @param options The options parameters.
     */
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options?: PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams): Promise<PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse>;
    /**
     * ListAllNext
     * @param nextLink The nextLink from the previous successful call to the ListAll method.
     * @param options The options parameters.
     */
    private _listAllNext;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListVirtualMachineScaleSetPublicIPAddressesNext
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListVirtualMachineScaleSetPublicIPAddresses method.
     * @param options The options parameters.
     */
    private _listVirtualMachineScaleSetPublicIPAddressesNext;
    /**
     * ListVirtualMachineScaleSetVMPublicIPAddressesNext
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The network interface name.
     * @param ipConfigurationName The IP configuration name.
     * @param nextLink The nextLink from the previous successful call to the
     *                 ListVirtualMachineScaleSetVMPublicIPAddresses method.
     * @param options The options parameters.
     */
    private _listVirtualMachineScaleSetVMPublicIPAddressesNext;
}
//# sourceMappingURL=publicIPAddresses.d.ts.map