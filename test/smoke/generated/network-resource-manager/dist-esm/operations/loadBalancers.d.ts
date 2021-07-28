import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LoadBalancers } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { LoadBalancer, LoadBalancersListAllOptionalParams, LoadBalancersListOptionalParams, LoadBalancersDeleteOptionalParams, LoadBalancersGetOptionalParams, LoadBalancersGetResponse, LoadBalancersCreateOrUpdateOptionalParams, LoadBalancersCreateOrUpdateResponse, TagsObject, LoadBalancersUpdateTagsOptionalParams, LoadBalancersUpdateTagsResponse } from "../models";
/** Class representing a LoadBalancers. */
export declare class LoadBalancersImpl implements LoadBalancers {
    private readonly client;
    /**
     * Initialize a new instance of the class LoadBalancers class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the load balancers in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: LoadBalancersListAllOptionalParams): PagedAsyncIterableIterator<LoadBalancer>;
    private listAllPagingPage;
    private listAllPagingAll;
    /**
     * Gets all the load balancers in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: LoadBalancersListOptionalParams): PagedAsyncIterableIterator<LoadBalancer>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Deletes the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersGetOptionalParams): Promise<LoadBalancersGetResponse>;
    /**
     * Creates or updates a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to the create or update load balancer operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: LoadBalancer, options?: LoadBalancersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<LoadBalancersCreateOrUpdateResponse>, LoadBalancersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to the create or update load balancer operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, loadBalancerName: string, parameters: LoadBalancer, options?: LoadBalancersCreateOrUpdateOptionalParams): Promise<LoadBalancersCreateOrUpdateResponse>;
    /**
     * Updates a load balancer tags.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to update load balancer tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, loadBalancerName: string, parameters: TagsObject, options?: LoadBalancersUpdateTagsOptionalParams): Promise<LoadBalancersUpdateTagsResponse>;
    /**
     * Gets all the load balancers in a subscription.
     * @param options The options parameters.
     */
    private _listAll;
    /**
     * Gets all the load balancers in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _list;
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
}
//# sourceMappingURL=loadBalancers.d.ts.map