// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  isUnexpected,
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
  Export202Response,
  ExportDefaultResponse,
} from "../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import {
  GetLongRunningPollerOptions,
  getLongRunningPoller,
} from "../common/lroImpl.js";
import {
  SimplePollerLike,
  OperationState as LroOperationState,
} from "@azure/core-lro";
import { User, ResourceOperationStatus, InnerError, Error } from "./models.js";
import { RequestOptions } from "../common/interfaces.js";

export interface CreateOrReplaceOptions extends RequestOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

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
  return context.path("/users/{name}", name).put({
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
): Promise<SimplePollerLike<LroOperationState<User>, User>> {
  const pollerOptions = {
    requestMethod: "put",
    requestUrl: "/users/{name}",
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
  )) as SimplePollerLike<LroOperationState<User>, User>;

  return poller;
}

export interface ExportOptions extends RequestOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

export function _exportSend(
  context: Client,
  name: string,
  format: string,
  options: ExportOptions = { requestOptions: {} }
): StreamableMethod<Export202Response | ExportDefaultResponse> {
  return context.path("/users/{name}:export", name).post({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
    queryParameters: { format: format },
  });
}

export async function _exportDeserialize(
  result: Export202Response | ExportDefaultResponse
): Promise<ResourceOperationStatus> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    status: result.body["status"],
    error: _parseerror(result.body.error),
    result: !result.body.result
      ? undefined
      : {
          name: result.body.result?.["name"],
          resourceUri: result.body.result?.["resourceUri"],
        },
  };
}

/** Exports a User */
export async function beginExport(
  context: Client,
  name: string,
  format: string,
  options: ExportOptions = { requestOptions: {} }
): Promise<
  SimplePollerLike<
    LroOperationState<ResourceOperationStatus>,
    ResourceOperationStatus
  >
> {
  const pollerOptions = {
    requestMethod: "post",
    requestUrl: "/users/{name}:export",
    deserializeFn: _exportDeserialize,
    sendInitialRequestFn: _exportSend,
    sendInitialRequestFnArgs: [context, name, format, options],
    createPollerOptions: {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    },
  } as GetLongRunningPollerOptions;

  const poller = (await getLongRunningPoller(
    context,
    pollerOptions
  )) as SimplePollerLike<
    LroOperationState<ResourceOperationStatus>,
    ResourceOperationStatus
  >;

  return poller;
}

function _parseinner_error(input?: InnerError): InnerError | undefined {
  if (!input) {
    return undefined;
  }

  return {
    code: input["code"],
    innererror: _parseinner_error(input?.innererror),
  };
}

function _parseerror(input?: Error): Error | undefined {
  if (!input) {
    return undefined;
  }

  return {
    code: input["code"],
    message: input["message"],
    target: input["target"],
    details: (input?.details ?? [])
      .filter((p) => Boolean(p))
      .map((p) => _parseerror(p)!),
    innererror: _parseinner_error(input.innererror),
  };
}
