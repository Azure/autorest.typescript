// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  VirtualMachineTemplate,
  VirtualMachineTemplateTagsUpdate,
} from "../../models/models.js";
import {
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/virtualMachineTemplates/index.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
} from "../../models/options.js";

export interface VirtualMachineTemplatesOperations {
  get: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams,
  ) => Promise<VirtualMachineTemplate>;
  createOrUpdate: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    resource: VirtualMachineTemplate,
    options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  update: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    properties: VirtualMachineTemplateTagsUpdate,
    options?: VirtualMachineTemplatesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  delete: (
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
  listBySubscription: (
    options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
}

export function getVirtualMachineTemplates(
  context: ScVmmContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesGetOptionalParams,
    ) =>
      get(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      resource: VirtualMachineTemplate,
      options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      properties: VirtualMachineTemplateTagsUpdate,
      options?: VirtualMachineTemplatesUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      virtualMachineTemplateName: string,
      options?: VirtualMachineTemplatesDeleteOptionalParams,
    ) =>
      $delete(
        context,
        subscriptionId,
        resourceGroupName,
        virtualMachineTemplateName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVirtualMachineTemplatesOperations(
  context: ScVmmContext,
  subscriptionId: string,
): VirtualMachineTemplatesOperations {
  return {
    ...getVirtualMachineTemplates(context, subscriptionId),
  };
}
