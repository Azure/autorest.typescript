// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CloudngfwContext } from "../../api/cloudngfwContext.js";
import {
  listByLocalRulestacks,
  $delete,
  createOrUpdate,
  get,
} from "../../api/fqdnListLocalRulestack/operations.js";
import {
  FqdnListLocalRulestackListByLocalRulestacksOptionalParams,
  FqdnListLocalRulestackDeleteOptionalParams,
  FqdnListLocalRulestackCreateOrUpdateOptionalParams,
  FqdnListLocalRulestackGetOptionalParams,
} from "../../api/fqdnListLocalRulestack/options.js";
import { FqdnListLocalRulestackResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a FqdnListLocalRulestack operations. */
export interface FqdnListLocalRulestackOperations {
  /** List FqdnListLocalRulestackResource resources by LocalRulestacks */
  listByLocalRulestacks: (
    resourceGroupName: string,
    localRulestackName: string,
    options?: FqdnListLocalRulestackListByLocalRulestacksOptionalParams,
  ) => PagedAsyncIterableIterator<FqdnListLocalRulestackResource>;
  /** Delete a FqdnListLocalRulestackResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    options?: FqdnListLocalRulestackDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a FqdnListLocalRulestackResource */
  createOrUpdate: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    resource: FqdnListLocalRulestackResource,
    options?: FqdnListLocalRulestackCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<FqdnListLocalRulestackResource>,
    FqdnListLocalRulestackResource
  >;
  /** Get a FqdnListLocalRulestackResource */
  get: (
    resourceGroupName: string,
    localRulestackName: string,
    name: string,
    options?: FqdnListLocalRulestackGetOptionalParams,
  ) => Promise<FqdnListLocalRulestackResource>;
}

function _getFqdnListLocalRulestack(context: CloudngfwContext) {
  return {
    listByLocalRulestacks: (
      resourceGroupName: string,
      localRulestackName: string,
      options?: FqdnListLocalRulestackListByLocalRulestacksOptionalParams,
    ) =>
      listByLocalRulestacks(
        context,
        resourceGroupName,
        localRulestackName,
        options,
      ),
    delete: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      options?: FqdnListLocalRulestackDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, localRulestackName, name, options),
    createOrUpdate: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      resource: FqdnListLocalRulestackResource,
      options?: FqdnListLocalRulestackCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        localRulestackName,
        name,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      localRulestackName: string,
      name: string,
      options?: FqdnListLocalRulestackGetOptionalParams,
    ) => get(context, resourceGroupName, localRulestackName, name, options),
  };
}

export function _getFqdnListLocalRulestackOperations(
  context: CloudngfwContext,
): FqdnListLocalRulestackOperations {
  return {
    ..._getFqdnListLocalRulestack(context),
  };
}
