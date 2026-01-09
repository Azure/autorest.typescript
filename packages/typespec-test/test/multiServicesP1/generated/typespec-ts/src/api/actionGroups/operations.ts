// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../index.js";
import { ComputeActionGroup, computeActionGroupDeserializer } from "../../models/compute/models.js";
import { ComputeDiskActionGroup } from "../../models/computeDisk/models.js";
import {
  errorResponseDeserializer,
  _ActionGroupListResult,
  _actionGroupListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { ActionGroupsListOptionalParams, ActionGroupsGetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: ComputeContext,
  options: ActionGroupsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.A/actionGroups{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion ?? "2025-01-02",
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ActionGroupListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _actionGroupListResultDeserializer(result.body);
}

/** List ActionGroup resources by subscription ID */
export function list(
  context: ComputeContext,
  options: ActionGroupsListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ComputeDiskActionGroup> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: ComputeContext,
  resourceGroupName: string,
  actionGroupName: string,
  options: ActionGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.A/actionGroups/{actionGroupName}{?api%2Dversion,%24expand}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      actionGroupName: actionGroupName,
      "api%2Dversion": context.apiVersion ?? "2025-04-01",
      "%24expand": options?.expand,
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<ComputeActionGroup> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return computeActionGroupDeserializer(result.body);
}

/** Get a ActionGroup */
export async function get(
  context: ComputeContext,
  resourceGroupName: string,
  actionGroupName: string,
  options: ActionGroupsGetOptionalParams = { requestOptions: {} },
): Promise<ComputeActionGroup> {
  const result = await _getSend(context, resourceGroupName, actionGroupName, options);
  return _getDeserialize(result);
}
