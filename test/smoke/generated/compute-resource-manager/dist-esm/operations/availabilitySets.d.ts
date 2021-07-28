import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AvailabilitySets } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { AvailabilitySet, AvailabilitySetsListBySubscriptionOptionalParams, AvailabilitySetsListOptionalParams, VirtualMachineSize, AvailabilitySetsListAvailableSizesOptionalParams, AvailabilitySetsCreateOrUpdateOptionalParams, AvailabilitySetsCreateOrUpdateResponse, AvailabilitySetUpdate, AvailabilitySetsUpdateOptionalParams, AvailabilitySetsUpdateResponse, AvailabilitySetsDeleteOptionalParams, AvailabilitySetsGetOptionalParams, AvailabilitySetsGetResponse } from "../models";
/** Class representing a AvailabilitySets. */
export declare class AvailabilitySetsImpl implements AvailabilitySets {
    private readonly client;
    /**
     * Initialize a new instance of the class AvailabilitySets class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all availability sets in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: AvailabilitySetsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<AvailabilitySet>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Lists all availability sets in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: AvailabilitySetsListOptionalParams): PagedAsyncIterableIterator<AvailabilitySet>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
     * existing availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsListAvailableSizesOptionalParams): PagedAsyncIterableIterator<VirtualMachineSize>;
    private listAvailableSizesPagingPage;
    private listAvailableSizesPagingAll;
    /**
     * Create or update an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param parameters Parameters supplied to the Create Availability Set operation.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: AvailabilitySet, options?: AvailabilitySetsCreateOrUpdateOptionalParams): Promise<AvailabilitySetsCreateOrUpdateResponse>;
    /**
     * Update an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param parameters Parameters supplied to the Update Availability Set operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, availabilitySetName: string, parameters: AvailabilitySetUpdate, options?: AvailabilitySetsUpdateOptionalParams): Promise<AvailabilitySetsUpdateResponse>;
    /**
     * Delete an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about an availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, availabilitySetName: string, options?: AvailabilitySetsGetOptionalParams): Promise<AvailabilitySetsGetResponse>;
    /**
     * Lists all availability sets in a subscription.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * Lists all availability sets in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
     * existing availability set.
     * @param resourceGroupName The name of the resource group.
     * @param availabilitySetName The name of the availability set.
     * @param options The options parameters.
     */
    private _listAvailableSizes;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=availabilitySets.d.ts.map