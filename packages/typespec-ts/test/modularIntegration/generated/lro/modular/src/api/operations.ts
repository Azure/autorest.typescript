// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  CreateOrReplaceLogicalResponse,
  isUnexpected
} from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions
} from "../common/interfaces.js";
import { User } from "./models.js";
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller
} from "@azure/core-lro";
import { HttpResponse } from "@azure-rest/core-client";

export interface CreateOrReplaceOptions extends RequestOptions {}

export function _createOrReplaceSend(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
) {
  return context.path("/azure/core/lro/standard/users/{name}", name).put({
    allowInsecureConnection: options.requestOptions?.allowInsecureConnection,
    skipUrlEncoding: options.requestOptions?.skipUrlEncoding,
    headers: { ...options.requestOptions?.headers },
    body: { role: role }
  });
}

export async function _createOrReplaceDeserialize(
  result:
    | OperationRawReturnType<typeof _createOrReplaceSend>
    | CreateOrReplaceLogicalResponse
): Promise<User> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    name: result.body["name"],
    role: result.body["role"]
  };
}

/** Creates or replaces a User */
export async function createOrReplace(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<User> {
  const result = await _createOrReplaceSend(context, role, name, options);
  return _createOrReplaceDeserialize(result);
}

/**
 * Below are the LRO functions for createOrReplace and they are manually wroten now
 */

export async function beginCreateOrReplace(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<User>, User>> {
  const poller = (await getLongRunningPoller(context, {
    requestMethod: "PUT",
    requestUrl: "/azure/core/lro/standard/users/{name}",
    deserializeFn: _createOrReplaceDeserialize,
    sendFn: _createOrReplaceSend,
    args: [context, role, name, options]
  })) as SimplePollerLike<OperationState<User>, User>;

  return poller;
}

interface OperationPollingDetail {
  requestMethod: string;
  requestUrl: string;
  sendFn: Function;
  deserializeFn: Function;
  args: unknown[];
}

async function getLongRunningPoller<TResult>(
  client: Client,
  operationDetail: OperationPollingDetail,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {}
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  let initialResponse: HttpResponse;
  const poller: LongRunningOperation<TResult> = {
    requestMethod: operationDetail.requestMethod,
    requestPath: operationDetail.requestUrl,
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      initialResponse = (await operationDetail.sendFn(
        ...operationDetail.args
      )) as HttpResponse;
      return getLroResponse(initialResponse, operationDetail.deserializeFn);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.

      if (path === operationDetail.requestUrl && initialResponse.request.url) {
        path = initialResponse.request.url;
      }
      const response = await client
        .pathUnchecked(path ?? operationDetail.requestUrl)
        .get();
      const lroResponse = getLroResponse(
        response,
        operationDetail.deserializeFn
      );
      if (initialResponse.request.url) {
        lroResponse.rawResponse.headers["x-ms-original-url"] =
          initialResponse.request.url;
      }
      return lroResponse as any;
    }
  };

  return await createHttpPoller(poller, options);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
  deserializeFn: Function
): LroResponse<TResult> {
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
