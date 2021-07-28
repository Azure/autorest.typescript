import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FirewallPolicies } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { FirewallPolicy, FirewallPoliciesListOptionalParams, FirewallPoliciesListAllOptionalParams, FirewallPoliciesDeleteOptionalParams, FirewallPoliciesGetOptionalParams, FirewallPoliciesGetResponse, FirewallPoliciesCreateOrUpdateOptionalParams, FirewallPoliciesCreateOrUpdateResponse } from "../models";
/** Class representing a FirewallPolicies. */
export declare class FirewallPoliciesImpl implements FirewallPolicies {
    private readonly client;
    /**
     * Initialize a new instance of the class FirewallPolicies class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Lists all Firewall Policies in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: FirewallPoliciesListOptionalParams): PagedAsyncIterableIterator<FirewallPolicy>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Gets all the Firewall Policies in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: FirewallPoliciesListAllOptionalParams): PagedAsyncIterableIterator<FirewallPolicy>;
    private listAllPagingPage;
    private listAllPagingAll;
    /**
     * Deletes the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesGetOptionalParams): Promise<FirewallPoliciesGetResponse>;
    /**
     * Creates or updates the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param parameters Parameters supplied to the create or update Firewall Policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, parameters: FirewallPolicy, options?: FirewallPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FirewallPoliciesCreateOrUpdateResponse>, FirewallPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param parameters Parameters supplied to the create or update Firewall Policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, firewallPolicyName: string, parameters: FirewallPolicy, options?: FirewallPoliciesCreateOrUpdateOptionalParams): Promise<FirewallPoliciesCreateOrUpdateResponse>;
    /**
     * Lists all Firewall Policies in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Gets all the Firewall Policies in a subscription.
     * @param options The options parameters.
     */
    private _listAll;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListAllNext
     * @param nextLink The nextLink from the previous successful call to the ListAll method.
     * @param options The options parameters.
     */
    private _listAllNext;
}
//# sourceMappingURL=firewallPolicies.d.ts.map