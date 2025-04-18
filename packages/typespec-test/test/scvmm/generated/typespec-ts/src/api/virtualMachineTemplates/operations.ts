// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  VirtualMachineTemplate,
  virtualMachineTemplateSerializer,
  virtualMachineTemplateDeserializer,
  VirtualMachineTemplateTagsUpdate,
  virtualMachineTemplateTagsUpdateSerializer,
  _VirtualMachineTemplateListResult,
  _virtualMachineTemplateListResultDeserializer,
} from "../../models/models.js";
import {
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _virtualMachineTemplatesListBySubscriptionSend(
  context: Client,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineTemplatesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualMachineTemplateListResultDeserializer(result.body);
}

/** List of VirtualMachineTemplates in a subscription. */
export function virtualMachineTemplatesListBySubscription(
  context: Client,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () => _virtualMachineTemplatesListBySubscriptionSend(context, options),
    _virtualMachineTemplatesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineTemplatesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineTemplatesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _virtualMachineTemplateListResultDeserializer(result.body);
}

/** List of VirtualMachineTemplates in a resource group. */
export function virtualMachineTemplatesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachineTemplatesListByResourceGroupSend(
        context,
        resourceGroupName,
        options,
      ),
    _virtualMachineTemplatesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineTemplatesDeleteSend(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}{?api-version,force}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualMachineTemplateName: virtualMachineTemplateName,
      "api-version": context.apiVersion,
      force: options?.force,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineTemplatesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deregisters the ScVmm VM Template from Azure. */
export function virtualMachineTemplatesDelete(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesDeleteSend(
          context,
          resourceGroupName,
          virtualMachineTemplateName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineTemplatesUpdateSend(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualMachineTemplateName: virtualMachineTemplateName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: virtualMachineTemplateTagsUpdateSerializer(properties),
    });
}

export async function _virtualMachineTemplatesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Updates the VirtualMachineTemplate resource. */
export function virtualMachineTemplatesUpdate(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesUpdateSend(
          context,
          resourceGroupName,
          virtualMachineTemplateName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualMachineTemplateName: virtualMachineTemplateName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: virtualMachineTemplateSerializer(resource),
    });
}

export async function _virtualMachineTemplatesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Onboards the ScVmm VM Template as an Azure VM Template resource. */
export function virtualMachineTemplatesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesCreateOrUpdateSend(
          context,
          resourceGroupName,
          virtualMachineTemplateName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesGetSend(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      virtualMachineTemplateName: virtualMachineTemplateName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _virtualMachineTemplatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Implements VirtualMachineTemplate GET method. */
export async function virtualMachineTemplatesGet(
  context: Client,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineTemplate> {
  const result = await _virtualMachineTemplatesGetSend(
    context,
    resourceGroupName,
    virtualMachineTemplateName,
    options,
  );
  return _virtualMachineTemplatesGetDeserialize(result);
}
