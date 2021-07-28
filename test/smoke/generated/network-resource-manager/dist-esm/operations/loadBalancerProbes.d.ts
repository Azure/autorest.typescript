import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LoadBalancerProbes } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { Probe, LoadBalancerProbesListOptionalParams, LoadBalancerProbesGetOptionalParams, LoadBalancerProbesGetResponse } from "../models";
/** Class representing a LoadBalancerProbes. */
export declare class LoadBalancerProbesImpl implements LoadBalancerProbes {
    private readonly client;
    /**
     * Initialize a new instance of the class LoadBalancerProbes class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the load balancer probes.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerProbesListOptionalParams): PagedAsyncIterableIterator<Probe>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the load balancer probes.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets load balancer probe.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param probeName The name of the probe.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, probeName: string, options?: LoadBalancerProbesGetOptionalParams): Promise<LoadBalancerProbesGetResponse>;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=loadBalancerProbes.d.ts.map