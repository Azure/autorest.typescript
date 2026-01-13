// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ComputeContext } from "../index.js";
import { ComputeActionGroup, computeActionGroupDeserializer } from "../../../models/compute/models.js";
import {
  errorResponseDeserializer,
} from "../../../models/models.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import { ActionGroupsGetOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: ComputeContext,
  resourceGroupName: string,
  actionGroupName: string,
  options: ActionGroupsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/actionGroups/{actionGroupName}{?api%2Dversion,%24expand}",
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
