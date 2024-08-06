// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { User, ExportedUser } from "../models/models.js";
import { StandardContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateOrReplaceOptionalParams,
  DeleteOptionalParams,
  ExportOptionalParams,
} from "../models/options.js";

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { role: resource["role"] },
    });
}

export async function _createOrReplaceDeserialize(
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    name: result.body["name"],
    role: result.body["role"],
  };
}

/** Creates or replaces a User */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(
    context,
    _createOrReplaceDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrReplaceSend(context, name, resource, options),
    },
  ) as PollerLike<OperationState<User>, User>;
}

export function _$deleteSend(
  context: Client,
  name: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a User */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  name: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$deleteSend(context, name, options),
  }) as PollerLike<OperationState<void>, void>;
}

export function _$exportSend(
  context: Client,
  name: string,
  format: string,
  options: ExportOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/azure/core/lro/standard/users/{name}:export", name)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format },
    });
}

export async function _$exportDeserialize(
  result: PathUncheckedResponse,
): Promise<ExportedUser> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  if (result?.body?.result === undefined) {
    throw createRestError(
      `Expected a result in the response at position "result.body.result"`,
      result,
    );
  }

  return {
    name: result.body.result["name"],
    resourceUri: result.body.result["resourceUri"],
  };
}

/** Exports a User */
/**
 *  @fixme export is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $export(
  context: Client,
  name: string,
  format: string,
  options: ExportOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ExportedUser>, ExportedUser> {
  return getLongRunningPoller(context, _$exportDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$exportSend(context, name, format, options),
  }) as PollerLike<OperationState<ExportedUser>, ExportedUser>;
}
