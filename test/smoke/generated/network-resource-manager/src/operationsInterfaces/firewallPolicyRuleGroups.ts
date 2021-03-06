/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  FirewallPolicyRuleGroup,
  FirewallPolicyRuleGroupsListOptionalParams,
  FirewallPolicyRuleGroupsDeleteOptionalParams,
  FirewallPolicyRuleGroupsGetOptionalParams,
  FirewallPolicyRuleGroupsGetResponse,
  FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams,
  FirewallPolicyRuleGroupsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FirewallPolicyRuleGroups. */
export interface FirewallPolicyRuleGroups {
  /**
   * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    firewallPolicyName: string,
    options?: FirewallPolicyRuleGroupsListOptionalParams
  ): PagedAsyncIterableIterator<FirewallPolicyRuleGroup>;
  /**
   * Deletes the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    options?: FirewallPolicyRuleGroupsGetOptionalParams
  ): Promise<FirewallPolicyRuleGroupsGetResponse>;
  /**
   * Creates or updates the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    parameters: FirewallPolicyRuleGroup,
    options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FirewallPolicyRuleGroupsCreateOrUpdateResponse>,
      FirewallPolicyRuleGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the specified FirewallPolicyRuleGroup.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleGroupName: string,
    parameters: FirewallPolicyRuleGroup,
    options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams
  ): Promise<FirewallPolicyRuleGroupsCreateOrUpdateResponse>;
}
