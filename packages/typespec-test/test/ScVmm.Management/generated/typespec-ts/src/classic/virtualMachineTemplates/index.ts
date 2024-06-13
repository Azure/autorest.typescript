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
    subscriptionId: string,
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams,
  ) => Promise<VirtualMachineTemplate>;
  createOrUpdate: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    resource: VirtualMachineTemplate,
    options?: VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  update: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    properties: VirtualMachineTemplateTagsUpdate,
    options?: VirtualMachineTemplatesUpdateOptionalParams,
  ) => PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
  delete: (
    subscriptionId: string,
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  listByResourceGroup: (
    subscriptionId: string,
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
  listBySubscription: (
    subscriptionId: string,
    options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<VirtualMachineTemplate>;
}

export function getVirtualMachineTemplates(context: ScVmmContext) {
  return {
    get: (
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
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
      subscriptionId: string,
      resourceGroupName: string,
      options?: VirtualMachineTemplatesListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (
      subscriptionId: string,
      options?: VirtualMachineTemplatesListBySubscriptionOptionalParams,
    ) => listBySubscription(context, subscriptionId, options),
  };
}

export function getVirtualMachineTemplatesOperations(
  context: ScVmmContext,
): VirtualMachineTemplatesOperations {
  return {
    ...getVirtualMachineTemplates(context),
  };
}
