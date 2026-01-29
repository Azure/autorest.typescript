// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridNetworkManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  Component,
  componentDeserializer,
  _ComponentListResult,
  _componentListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ComponentsListByNetworkFunctionOptionalParams,
  ComponentsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listByNetworkFunctionSend(
  context: Client,
  resourceGroupName: string,
  networkFunctionName: string,
  options: ComponentsListByNetworkFunctionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/components{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      networkFunctionName: networkFunctionName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByNetworkFunctionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ComponentListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _componentListResultDeserializer(result.body);
}

/** Lists all the component resources in a network function. */
export function listByNetworkFunction(
  context: Client,
  resourceGroupName: string,
  networkFunctionName: string,
  options: ComponentsListByNetworkFunctionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Component> {
  return buildPagedAsyncIterator(
    context,
    () => _listByNetworkFunctionSend(context, resourceGroupName, networkFunctionName, options),
    _listByNetworkFunctionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  networkFunctionName: string,
  componentName: string,
  options: ComponentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/networkFunctions/{networkFunctionName}/components/{componentName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      networkFunctionName: networkFunctionName,
      componentName: componentName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(result: PathUncheckedResponse): Promise<Component> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return componentDeserializer(result.body);
}

/** Gets information about the specified application instance resource. */
export async function get(
  context: Client,
  resourceGroupName: string,
  networkFunctionName: string,
  componentName: string,
  options: ComponentsGetOptionalParams = { requestOptions: {} },
): Promise<Component> {
  const result = await _getSend(
    context,
    resourceGroupName,
    networkFunctionName,
    componentName,
    options,
  );
  return _getDeserialize(result);
}
