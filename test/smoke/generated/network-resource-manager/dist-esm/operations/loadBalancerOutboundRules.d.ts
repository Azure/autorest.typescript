import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LoadBalancerOutboundRules } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { OutboundRule, LoadBalancerOutboundRulesListOptionalParams, LoadBalancerOutboundRulesGetOptionalParams, LoadBalancerOutboundRulesGetResponse } from "../models";
/** Class representing a LoadBalancerOutboundRules. */
export declare class LoadBalancerOutboundRulesImpl implements LoadBalancerOutboundRules {
    private readonly client;
    /**
     * Initialize a new instance of the class LoadBalancerOutboundRules class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets all the outbound rules in a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerOutboundRulesListOptionalParams): PagedAsyncIterableIterator<OutboundRule>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the outbound rules in a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets the specified load balancer outbound rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param outboundRuleName The name of the outbound rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, options?: LoadBalancerOutboundRulesGetOptionalParams): Promise<LoadBalancerOutboundRulesGetResponse>;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=loadBalancerOutboundRules.d.ts.map