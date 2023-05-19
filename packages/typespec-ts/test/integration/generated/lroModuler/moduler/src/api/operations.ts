// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  StandardContext as Client,
  CreateOrReplaceLogicalResponse,
  getLongRunningPoller,
  isUnexpected
} from "../rest/index.js";
import {
  OperationRawReturnType,
  RequestOptions
} from "../common/interfaces.js";
import { User } from "./models.js";
import { OperationState, SimplePollerLike } from "@azure/core-lro";

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
export async function beginCreateOrReplaceAndWait(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<User> {
  const initialResponse = await _createOrReplaceSend(
    context,
    role,
    name,
    options
  );
  const poller = await getLongRunningPoller(context, initialResponse, {
    intervalInMs: 0
  });
  const result = await poller.pollUntilDone();
  return _createOrReplaceDeserialize(result);
}

export async function beginCreateOrReplace(
  context: Client,
  role: string,
  name: string,
  options: CreateOrReplaceOptions = { requestOptions: {} }
): Promise<SimplePollerLike<OperationState<User>, User>> {
  const initialResponse = await _createOrReplaceSend(
    context,
    role,
    name,
    options
  );
  const poller = await getLongRunningPoller<User>(context, initialResponse, {
    processResult: (result) => {
      return _createOrReplaceDeserialize(
        result as CreateOrReplaceLogicalResponse
      );
    },
    intervalInMs: 0
  });

  return poller;
}
