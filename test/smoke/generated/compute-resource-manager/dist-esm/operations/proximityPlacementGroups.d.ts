import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ProximityPlacementGroups } from "../operationsInterfaces";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { ProximityPlacementGroup, ProximityPlacementGroupsListBySubscriptionOptionalParams, ProximityPlacementGroupsListByResourceGroupOptionalParams, ProximityPlacementGroupsCreateOrUpdateOptionalParams, ProximityPlacementGroupsCreateOrUpdateResponse, ProximityPlacementGroupUpdate, ProximityPlacementGroupsUpdateOptionalParams, ProximityPlacementGroupsUpdateResponse, ProximityPlacementGroupsDeleteOptionalParams, ProximityPlacementGroupsGetOptionalParams, ProximityPlacementGroupsGetResponse } from "../models";
/** Class representing a ProximityPlacementGroups. */
export declare class ProximityPlacementGroupsImpl implements ProximityPlacementGroups {
    private readonly client;
    /**
     * Initialize a new instance of the class ProximityPlacementGroups class.
     * @param client Reference to the service client
     */
    constructor(client: ComputeManagementClientContext);
    /**
     * Lists all proximity placement groups in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: ProximityPlacementGroupsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<ProximityPlacementGroup>;
    private listBySubscriptionPagingPage;
    private listBySubscriptionPagingAll;
    /**
     * Lists all proximity placement groups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ProximityPlacementGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ProximityPlacementGroup>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Create or update a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param parameters Parameters supplied to the Create Proximity Placement Group operation.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, proximityPlacementGroupName: string, parameters: ProximityPlacementGroup, options?: ProximityPlacementGroupsCreateOrUpdateOptionalParams): Promise<ProximityPlacementGroupsCreateOrUpdateResponse>;
    /**
     * Update a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param parameters Parameters supplied to the Update Proximity Placement Group operation.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, proximityPlacementGroupName: string, parameters: ProximityPlacementGroupUpdate, options?: ProximityPlacementGroupsUpdateOptionalParams): Promise<ProximityPlacementGroupsUpdateResponse>;
    /**
     * Delete a proximity placement group.
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, proximityPlacementGroupName: string, options?: ProximityPlacementGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves information about a proximity placement group .
     * @param resourceGroupName The name of the resource group.
     * @param proximityPlacementGroupName The name of the proximity placement group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, proximityPlacementGroupName: string, options?: ProximityPlacementGroupsGetOptionalParams): Promise<ProximityPlacementGroupsGetResponse>;
    /**
     * Lists all proximity placement groups in a subscription.
     * @param options The options parameters.
     */
    private _listBySubscription;
    /**
     * Lists all proximity placement groups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * ListBySubscriptionNext
     * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
     * @param options The options parameters.
     */
    private _listBySubscriptionNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
}
//# sourceMappingURL=proximityPlacementGroups.d.ts.map