// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WebContext } from "../../api/webContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/kubeEnvironments/operations.js";
import {
  KubeEnvironmentsListBySubscriptionOptionalParams,
  KubeEnvironmentsListByResourceGroupOptionalParams,
  KubeEnvironmentsDeleteOptionalParams,
  KubeEnvironmentsUpdateOptionalParams,
  KubeEnvironmentsCreateOrUpdateOptionalParams,
  KubeEnvironmentsGetOptionalParams,
} from "../../api/kubeEnvironments/options.js";
import { KubeEnvironment, KubeEnvironmentPatchResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a KubeEnvironments operations. */
export interface KubeEnvironmentsOperations {
  /** Description for Get all Kubernetes Environments for a subscription. */
  listBySubscription: (
    options?: KubeEnvironmentsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<KubeEnvironment>;
  /** Description for Get all the Kubernetes Environments in a resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: KubeEnvironmentsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<KubeEnvironment>;
  /** Description for Delete a Kubernetes Environment. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    name: string,
    options?: KubeEnvironmentsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Description for Creates or updates a Kubernetes Environment. */
  update: (
    resourceGroupName: string,
    name: string,
    kubeEnvironmentEnvelope: KubeEnvironmentPatchResource,
    options?: KubeEnvironmentsUpdateOptionalParams,
  ) => Promise<KubeEnvironment>;
  /** Description for Creates or updates a Kubernetes Environment. */
  createOrUpdate: (
    resourceGroupName: string,
    name: string,
    kubeEnvironmentEnvelope: KubeEnvironment,
    options?: KubeEnvironmentsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<KubeEnvironment>, KubeEnvironment>;
  /** Description for Get the properties of a Kubernetes Environment. */
  get: (
    resourceGroupName: string,
    name: string,
    options?: KubeEnvironmentsGetOptionalParams,
  ) => Promise<KubeEnvironment>;
}

function _getKubeEnvironments(context: WebContext) {
  return {
    listBySubscription: (options?: KubeEnvironmentsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: KubeEnvironmentsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      name: string,
      options?: KubeEnvironmentsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, name, options),
    update: (
      resourceGroupName: string,
      name: string,
      kubeEnvironmentEnvelope: KubeEnvironmentPatchResource,
      options?: KubeEnvironmentsUpdateOptionalParams,
    ) => update(context, resourceGroupName, name, kubeEnvironmentEnvelope, options),
    createOrUpdate: (
      resourceGroupName: string,
      name: string,
      kubeEnvironmentEnvelope: KubeEnvironment,
      options?: KubeEnvironmentsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, name, kubeEnvironmentEnvelope, options),
    get: (resourceGroupName: string, name: string, options?: KubeEnvironmentsGetOptionalParams) =>
      get(context, resourceGroupName, name, options),
  };
}

export function _getKubeEnvironmentsOperations(context: WebContext): KubeEnvironmentsOperations {
  return {
    ..._getKubeEnvironments(context),
  };
}
