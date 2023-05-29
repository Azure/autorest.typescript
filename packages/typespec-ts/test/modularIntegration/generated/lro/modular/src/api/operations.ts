// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  CreateOrReplaceLogicalResponse,
  isUnexpected
} from "../rest/index.js";
import { RequestOptions } from "../common/interfaces.js";
import { User } from "./models.js";
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller
} from "@azure/core-lro";
import { HttpResponse, StreamableMethod } from "@azure-rest/core-client";

export interface BeginCreateOrReplaceOptions extends RequestOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

export function _createOrReplaceSend(
  context: Client,
  role: string,
  name: string,
  options: BeginCreateOrReplaceOptions = { requestOptions: {} }
) {
  return context.path("/azure/core/lro/standard/users/{name}", name).put({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
    body: { role: role }
  });
}

export async function _createOrReplaceDeserialize(
  result: CreateOrReplaceLogicalResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    name: result.body["name"],
    role: result.body["role"]
  };
}

export async function beginCreateOrReplace(
  context: Client,
  role: string,
  name: string,
  options: BeginCreateOrReplaceOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<User>, User>> {
  const pollerOptions = {
    requestMethod: "PUT",
    requestUrl: "/azure/core/lro/standard/users/{name}",
    deserializeFn: _createOrReplaceDeserialize,
    sendInitialRequestFn: _createOrReplaceSend,
    sendInitialRequestFnArgs: [role, name, options],
    createPollerOptions: {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    }
  } as GetLongRunningPollerOptions;
  const poller = (await getLongRunningPoller(
    context,
    pollerOptions
  )) as SimplePollerLike<OperationState<User>, User>;

  return poller;
}

interface GetLongRunningPollerOptions<
  TResponse extends HttpResponse = HttpResponse
> {
  requestMethod: string;
  requestUrl: string;
  sendInitialRequestFn: (
    context: Client,
    ...args: unknown[]
  ) => StreamableMethod<TResponse>;
  sendInitialRequestFnArgs: unknown[];
  deserializeFn: (response: TResponse) => Promise<unknown>;
  createPollerOptions: CreateHttpPollerOptions<
    unknown,
    OperationState<unknown>
  >;
}

async function getLongRunningPoller<TResponse extends HttpResponse>(
  client: Client,
  options: GetLongRunningPollerOptions<TResponse>
): Promise<SimplePollerLike<OperationState<unknown>, unknown>> {
  let initialResponse: TResponse;
  const poller: LongRunningOperation<unknown> = {
    requestMethod: options.requestMethod,
    requestPath: options.requestUrl,
    sendInitialRequest: async () => {
      initialResponse = (await options.sendInitialRequestFn(
        client,
        ...options.sendInitialRequestFnArgs
      )) as TResponse;
      return getLroResponse(initialResponse, options.deserializeFn);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      if (!path || path === options.requestUrl) {
        path = initialResponse.request.url ?? options.requestUrl;
      }
      const response = await client.pathUnchecked(path).get();
      const lroResponse = getLroResponse(
        response as TResponse,
        options.deserializeFn
      );
      if (initialResponse.request.url) {
        lroResponse.rawResponse.headers["x-ms-original-url"] =
          initialResponse.request.url;
      }
      return lroResponse;
    }
  };

  return await createHttpPoller(poller, options.createPollerOptions);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @param deserializeFn - deserialize function to convert Rest response to modular output
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResponse extends HttpResponse>(
  response: TResponse,
  deserializeFn: (result: TResponse) => Promise<unknown>
): LroResponse {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      `Status code of the response is not a number. Value: ${response.status}`
    );
  }

  return {
    flatResponse: deserializeFn(response),
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body
    }
  };
}
