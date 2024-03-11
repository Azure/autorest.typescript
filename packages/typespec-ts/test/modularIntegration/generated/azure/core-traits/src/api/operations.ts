// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, UserActionParam, UserActionResponse } from "../models/models.js";
import {
  isUnexpected,
  RepeatableAction200Response,
  RepeatableActionDefaultResponse,
  SmokeTest200Response,
  SmokeTestDefaultResponse,
  TraitsContext as Client,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  SmokeTestOptions,
  RepeatableActionOptions,
} from "../models/options.js";

export function _smokeTestSend(
  context: Client,
  id: number,
  foo: string,
  options: SmokeTestOptions = { requestOptions: {} },
): StreamableMethod<SmokeTest200Response | SmokeTestDefaultResponse> {
  return context
    .path("/azure/core/traits/user/{id}", id)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        foo: foo,
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
        ...(options?.ifUnmodifiedSince !== undefined
          ? { "If-Unmodified-Since": options?.ifUnmodifiedSince?.toUTCString() }
          : {}),
        ...(options?.ifModifiedSince !== undefined
          ? { "If-Modified-Since": options?.ifModifiedSince?.toUTCString() }
          : {}),
        ...(options?.clientRequestId !== undefined
          ? { "x-ms-client-request-id": options?.clientRequestId }
          : {}),
      },
    });
}

export async function _smokeTestDeserialize(
  result: SmokeTest200Response | SmokeTestDefaultResponse,
): Promise<User> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
  };
}

/** Get a resource, sending and receiving headers. */
export async function smokeTest(
  context: Client,
  id: number,
  foo: string,
  options: SmokeTestOptions = { requestOptions: {} },
): Promise<User> {
  const result = await _smokeTestSend(context, id, foo, options);
  return _smokeTestDeserialize(result);
}

export function _repeatableActionSend(
  context: Client,
  id: number,
  body: UserActionParam,
  options: RepeatableActionOptions = { requestOptions: {} },
): StreamableMethod<
  RepeatableAction200Response | RepeatableActionDefaultResponse
> {
  return context
    .path("/azure/core/traits/user/{id}:repeatableAction", id)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.repeatabilityRequestId !== undefined
          ? { "Repeatability-Request-ID": options?.repeatabilityRequestId }
          : {}),
        ...(options?.repeatabilityFirstSent !== undefined
          ? {
              "Repeatability-First-Sent":
                options?.repeatabilityFirstSent?.toUTCString(),
            }
          : {}),
      },
      body: { userActionValue: body["userActionValue"] },
    });
}

export async function _repeatableActionDeserialize(
  result: RepeatableAction200Response | RepeatableActionDefaultResponse,
): Promise<UserActionResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    userActionResult: result.body["userActionResult"],
  };
}

/** Test for repeatable requests */
export async function repeatableAction(
  context: Client,
  id: number,
  body: UserActionParam,
  options: RepeatableActionOptions = { requestOptions: {} },
): Promise<UserActionResponse> {
  const result = await _repeatableActionSend(context, id, body, options);
  return _repeatableActionDeserialize(result);
}
