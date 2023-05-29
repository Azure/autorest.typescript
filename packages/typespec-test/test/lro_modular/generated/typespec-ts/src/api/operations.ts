// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  isUnexpected,
  CreateOrReplace200Response,
  CreateOrReplace201Response,
  CreateOrReplaceDefaultResponse,
} from "../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import {
  GetLongRunningPollerOptions,
  getLongRunningPoller,
} from "../common/lroImpl.js";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import { User } from "./models.js";
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
  return context
    .path("/users/{name}", name)
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
  )) as SimplePollerLike<OperationState<User>, User>;

  return poller;
}
