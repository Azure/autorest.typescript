// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  isUnexpected,
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  DeleteOperation202Response,
  DeleteOperationDefaultResponse,
  ExportOperation202Response,
  ExportOperationDefaultResponse,
} from "../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import {
  GetLongRunningPollerOptions,
  getLongRunningPoller,
} from "../common/lroImpl.js";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import { User, OperationStatus, ExportedUser } from "./models.js";
import { RequestOptions } from "../common/interfaces.js";

export interface CreateOrReplaceOptions extends RequestOptions {}

export function _createOrReplaceSend(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): StreamableMethod<
  | CreateOrReplace200Response
  | CreateOrReplace201Response
  | CreateOrReplaceDefaultResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .put({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      body: { role: role },
    });
}

export async function _createOrReplaceDeserialize(
  result:
    | CreateOrReplace200Response
    | CreateOrReplace201Response
    | CreateOrReplaceDefaultResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    name: result.body["name"],
    role: result.body["role"],
  };
}

/** Creates or replaces a User */
export async function beginCreateOrReplace(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<User>, User>> {
  const pollerOptions = {
    requestMethod: "PUT",
    requestUrl: "/azure/core/lro/standard/users/{name}",
    deserializeFn: _createOrReplaceDeserialize,
    sendInitialRequestFn: _createOrReplaceSend,
    sendInitialRequestFnArgs: [context, role, name, options],
    createPollerOptions: {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    },
  } as GetLongRunningPollerOptions;
  const poller = (await getLongRunningPoller(
    context,
    pollerOptions
  )) as SimplePollerLike<OperationState<User>, User>;
  return poller;
}

export interface DeleteOptions extends RequestOptions {}

export function _deleteOperationSend(
  context: Client,
  name: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  DeleteOperation202Response | DeleteOperationDefaultResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}", name)
    .delete({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
    });
}

export async function _deleteOperationDeserialize(
  result: DeleteOperation202Response | DeleteOperationDefaultResponse
): Promise<OperationStatus> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: !result.body.error ? undefined : result.body.error,
  };
}

/** Deletes a User */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function beginDelete(
  context: Client,
  name: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<OperationStatus>, OperationStatus>> {
  const pollerOptions = {
    requestMethod: "DELETE",
    requestUrl: "/azure/core/lro/standard/users/{name}",
    deserializeFn: _deleteOperationDeserialize,
    sendInitialRequestFn: _deleteOperationSend,
    sendInitialRequestFnArgs: [context, name, options],
    createPollerOptions: {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    },
  } as GetLongRunningPollerOptions;
  const poller = (await getLongRunningPoller(
    context,
    pollerOptions
  )) as SimplePollerLike<OperationState<OperationStatus>, OperationStatus>;
  return poller;
}

export interface ExportOptions extends RequestOptions {}

export function _exportOperationSend(
  context: Client,
  name: string,
  format: string,
  options: ExportOptions = { requestOptions: {} }
): StreamableMethod<
  ExportOperation202Response | ExportOperationDefaultResponse
> {
  return context
    .path("/azure/core/lro/standard/users/{name}:export", name)
    .post({
      allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
      skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
      headers: { ...options.requestOptions?.headers },
      queryParameters: { format: format },
    });
}

export async function _exportOperationDeserialize(
  result: ExportOperation202Response | ExportOperationDefaultResponse
): Promise<ExportedUser | undefined> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  if (!result.body.result) {
    return undefined;
  }

  return {
    name: result.body.result["name"],
    resourceUri: result.body.result["resourceUri"],
  };
}

/** Exports a User */
/**
 *  @fixme export is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function beginExport(
  context: Client,
  name: string,
  format: string,
  options: ExportOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<ExportedUser>, ExportedUser>> {
  const pollerOptions = {
    requestMethod: "POST",
    requestUrl: "/azure/core/lro/standard/users/{name}:export",
    deserializeFn: _exportOperationDeserialize,
    sendInitialRequestFn: _exportOperationSend,
    sendInitialRequestFnArgs: [context, name, format, options],
    createPollerOptions: {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    },
  } as GetLongRunningPollerOptions;
  const poller = (await getLongRunningPoller(
    context,
    pollerOptions
  )) as SimplePollerLike<OperationState<ExportedUser>, ExportedUser>;
  return poller;
}
