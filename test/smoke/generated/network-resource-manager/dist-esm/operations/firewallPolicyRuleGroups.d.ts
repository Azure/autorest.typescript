import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FirewallPolicyRuleGroups } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { FirewallPolicyRuleGroup, FirewallPolicyRuleGroupsListOptionalParams, FirewallPolicyRuleGroupsDeleteOptionalParams, FirewallPolicyRuleGroupsGetOptionalParams, FirewallPolicyRuleGroupsGetResponse, FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams, FirewallPolicyRuleGroupsCreateOrUpdateResponse } from "../models";
/** Class representing a FirewallPolicyRuleGroups. */
export declare class FirewallPolicyRuleGroupsImpl implements FirewallPolicyRuleGroups {
    private readonly client;
    /**
     * Initialize a new instance of the class FirewallPolicyRuleGroups class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPolicyRuleGroupsListOptionalParams): PagedAsyncIterableIterator<FirewallPolicyRuleGroup>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Deletes the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsGetOptionalParams): Promise<FirewallPolicyRuleGroupsGetResponse>;
    /**
     * Creates or updates the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, parameters: FirewallPolicyRuleGroup, options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FirewallPolicyRuleGroupsCreateOrUpdateResponse>, FirewallPolicyRuleGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, parameters: FirewallPolicyRuleGroup, options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams): Promise<FirewallPolicyRuleGroupsCreateOrUpdateResponse>;
    /**
     * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=firewallPolicyRuleGroups.d.ts.map