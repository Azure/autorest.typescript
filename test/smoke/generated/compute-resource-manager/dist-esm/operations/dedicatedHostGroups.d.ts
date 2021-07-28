import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DedicatedHostGroups } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { DedicatedHostGroup, DedicatedHostGroupsListByResourceGroupOptionalParams, DedicatedHostGroupsListBySubscriptionOptionalParams, DedicatedHostGroupsCreateOrUpdateOptionalParams, DedicatedHostGroupsCreateOrUpdateResponse, DedicatedHostGroupUpdate, DedicatedHostGroupsUpdateOptionalParams, DedicatedHostGroupsUpdateResponse, DedicatedHostGroupsDeleteOptionalParams, DedicatedHostGroupsGetOptionalParams, DedicatedHostGroupsGetResponse } from "../models";
/** Class representing a DedicatedHostGroups. */
export declare class DedicatedHostGroupsImpl implements DedicatedHostGroups {
    private readonly client;
    /**
     * Initialize a new instance of the class DedicatedHostGroups class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
     * the response to get the next page of dedicated host groups.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DedicatedHostGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DedicatedHostGroup>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
     * response to get the next page of dedicated host groups.
     * @param options The options parameters.
     */
    listBySubscription(options?: DedicatedHostGroupsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<DedicatedHostGroup>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Create or update a dedicated host group. For details of Dedicated Host and Dedicated Host Groups
     * please see [Dedicated Host Documentation] (https://go.microsoft.com/fwlink/?linkid=2082596)
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param parameters Parameters supplied to the Create Dedicated Host Group.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, hostGroupName: string, parameters: DedicatedHostGroup, options?: DedicatedHostGroupsCreateOrUpdateOptionalParams): Promise<DedicatedHostGroupsCreateOrUpdateResponse>;
    /**
     * Update an dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param parameters Parameters supplied to the Update Dedicated Host Group operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, hostGroupName: string, parameters: DedicatedHostGroupUpdate, options?: DedicatedHostGroupsUpdateOptionalParams): Promise<DedicatedHostGroupsUpdateResponse>;
    /**
     * Delete a dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, hostGroupName: string, options?: DedicatedHostGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about a dedicated host group.
     * @param resourceGroupName The name of the resource group.
     * @param hostGroupName The name of the dedicated host group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, hostGroupName: string, options?: DedicatedHostGroupsGetOptionalParams): Promise<DedicatedHostGroupsGetResponse>;
    /**
     * Lists all of the dedicated host groups in the specified resource group. Use the nextLink property in
     * the response to get the next page of dedicated host groups.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Lists all of the dedicated host groups in the subscription. Use the nextLink property in the
     * response to get the next page of dedicated host groups.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
}
//# sourceMappingURL=dedicatedHostGroups.d.ts.map