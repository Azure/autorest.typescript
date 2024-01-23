// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "./pollingHelpers.js";
import { Next } from "@azure/core-lro";
import { User, ExportedUser } from "../models/models.js";
import {
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  CreateOrReplaceLogicalResponse,
  DeleteLogicalResponse,
  DeleteOperation202Response,
  DeleteOperationDefaultResponse,
  ExportLogicalResponse,
  ExportOperation202Response,
  ExportOperationDefaultResponse,
  isUnexpected,
  StandardContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CreateOrReplaceOptions,
  DeleteOperationOptions,
  ExportOperationOptions,
} from "../models/options.js";

export function _createOrReplaceSend(
  context: Client,
  name: string,
  resource: User,
  options: CreateOrReplaceOptions = { requestOptions: {} },
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
  options: CreateOrReplaceOptions = { requestOptions: {} },
): Next.PollerLike<Next.OperationState<User>, User> {
  return getLongRunningPoller(context, _createOrReplaceDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrReplaceSend(context, name, resource, options),
  }) as Next.PollerLike<Next.OperationState<User>, User>;
}

export function _deleteOperationSend(
  context: Client,
  name: string,
  options: DeleteOperationOptions = { requestOptions: {} },
): StreamableMethod<
  | DeleteOperation202Response
  | DeleteOperationDefaultResponse
  | DeleteLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result:
    | DeleteOperation202Response
    | DeleteOperationDefaultResponse
    | DeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a User */
export function deleteOperation(
  context: Client,
  name: string,
  options: DeleteOperationOptions = { requestOptions: {} },
): Next.PollerLike<Next.OperationState<void>, void> {
  return getLongRunningPoller(context, _deleteOperationDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _deleteOperationSend(context, name, options),
  }) as Next.PollerLike<Next.OperationState<void>, void>;
}

export function _exportOperationSend(
  context: Client,
  name: string,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} },
): StreamableMethod<
  | ExportOperation202Response
  | ExportOperationDefaultResponse
  | ExportLogicalResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}:export", name)
    .post({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { format: format },
    });
}

export async function _exportOperationDeserialize(
  result:
    | ExportOperation202Response
    | ExportOperationDefaultResponse
    | ExportLogicalResponse,
): Promise<ExportedUser> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    name: result.body.result["name"],
    resourceUri: result.body.result["resourceUri"],
  };
}

/** Exports a User */
export function exportOperation(
  context: Client,
  name: string,
  format: string,
  options: ExportOperationOptions = { requestOptions: {} },
): Next.PollerLike<Next.OperationState<ExportedUser>, ExportedUser> {
  return getLongRunningPoller(context, _exportOperationDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _exportOperationSend(context, name, format, options),
  }) as Next.PollerLike<Next.OperationState<ExportedUser>, ExportedUser>;
}
