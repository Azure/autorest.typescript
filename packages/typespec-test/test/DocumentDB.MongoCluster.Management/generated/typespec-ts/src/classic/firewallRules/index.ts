// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DocumentDBContext } from "../../api/documentDBContext.js";
import { FirewallRule } from "../../models/models.js";
import {
  firewallRulesGet,
  firewallRulesCreateOrUpdate,
  firewallRulesDelete,
  firewallRulesListByMongoCluster,
} from "../../api/firewallRules/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  FirewallRulesGetOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesListByMongoClusterOptionalParams,
} from "../../models/options.js";

export interface FirewallRulesOperations {
  get: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams,
  ) => Promise<FirewallRule>;
  createOrUpdate: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    resource: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  delete: (
    resourceGroupName: string,
    mongoClusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByMongoCluster: (
    resourceGroupName: string,
    mongoClusterName: string,
    options?: FirewallRulesListByMongoClusterOptionalParams,
  ) => PagedAsyncIterableIterator<FirewallRule>;
}

export function getFirewallRules(
  context: DocumentDBContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      options?: FirewallRulesGetOptionalParams,
    ) =>
      firewallRulesGet(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        firewallRuleName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      resource: FirewallRule,
      options?: FirewallRulesCreateOrUpdateOptionalParams,
    ) =>
      firewallRulesCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        firewallRuleName,
        resource,
        options,
      ),
    delete: (
      resourceGroupName: string,
      mongoClusterName: string,
      firewallRuleName: string,
      options?: FirewallRulesDeleteOptionalParams,
    ) =>
      firewallRulesDelete(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        firewallRuleName,
        options,
      ),
    listByMongoCluster: (
      resourceGroupName: string,
      mongoClusterName: string,
      options?: FirewallRulesListByMongoClusterOptionalParams,
    ) =>
      firewallRulesListByMongoCluster(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
  };
}

export function getFirewallRulesOperations(
  context: DocumentDBContext,
  subscriptionId: string,
): FirewallRulesOperations {
  return {
    ...getFirewallRules(context, subscriptionId),
  };
}
