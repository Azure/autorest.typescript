// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { User, ExportedUser } from "../models/models.js";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  CreateOrReplaceLogicalResponse,
  Delete202Response,
  DeleteDefaultResponse,
  DeleteLogicalResponse,
  Export202Response,
  ExportDefaultResponse,
  ExportLogicalResponse,
  isUnexpected,
  StandardContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
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
): StreamableMethod<
  | CreateOrReplace200Response
  | CreateOrReplace201Response
  | CreateOrReplaceDefaultResponse
  | CreateOrReplaceLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { role: resource["role"] },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
    | CreateOrReplaceLogicalResponse,
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as CreateOrReplaceLogicalResponse;
  return {
    name: res.body["name"],
    role: res.body["role"],
  };
}

/** Creates or replaces a User */
export function createOrReplace(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(context, name, resource, options),
  }) as PollerLike<OperationState<User>, User>;
}

export function _$deleteSend(
  context: Client,
  name: string,
  options: DeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  Delete202Response | DeleteDefaultResponse | DeleteLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result: Delete202Response | DeleteDefaultResponse | DeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
  return getLongRunningPoller(context, _$deleteDeserialize, {
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
): StreamableMethod<
  Export202Response | ExportDefaultResponse | ExportLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}:export", name)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format },
    });
}

export async function _$exportDeserialize(
  result: Export202Response | ExportDefaultResponse | ExportLogicalResponse,
): Promise<ExportedUser> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as ExportLogicalResponse;
  if (res?.body?.result === undefined) {
    throw createRestError(
      `Expected a result in the response at position "res.body.result"`,
      result,
    );
  }

  return {
    name: res.body.result["name"],
    resourceUri: res.body.result["resourceUri"],
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
  return getLongRunningPoller(context, _$exportDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _$exportSend(context, name, format, options),
  }) as PollerLike<OperationState<ExportedUser>, ExportedUser>;
}
