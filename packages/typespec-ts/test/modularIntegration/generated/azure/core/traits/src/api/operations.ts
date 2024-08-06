// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User, UserActionParam, UserActionResponse } from "../models/models.js";
import { TraitsContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  SmokeTestOptionalParams,
  RepeatableActionOptionalParams,
} from "../models/options.js";

export function _smokeTestSend(
  context: Client,
  id: number,
  foo: string,
  options: SmokeTestOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<User> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: SmokeTestOptionalParams = { requestOptions: {} },
): Promise<User> {
  const result = await _smokeTestSend(context, id, foo, options);
  return _smokeTestDeserialize(result);
}

export function _repeatableActionSend(
  context: Client,
  id: number,
  body: UserActionParam,
  options: RepeatableActionOptionalParams = { requestOptions: {} },
): StreamableMethod {
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
  result: PathUncheckedResponse,
): Promise<UserActionResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: RepeatableActionOptionalParams = { requestOptions: {} },
): Promise<UserActionResponse> {
  const result = await _repeatableActionSend(context, id, body, options);
  return _repeatableActionDeserialize(result);
}
