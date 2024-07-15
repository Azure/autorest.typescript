// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ConditionalRequestContext as Client,
  PostIfMatch204Response,
  PostIfNoneMatch204Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PostIfMatchOptionalParams,
  PostIfNoneMatchOptionalParams,
} from "../models/options.js";

export function _postIfMatchSend(
  context: Client,
  options: PostIfMatchOptionalParams = { requestOptions: {} },
): StreamableMethod<PostIfMatch204Response> {
  return context
    .path("/special-headers/conditional-request/if-match")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifMatch !== undefined
          ? { "If-Match": options?.ifMatch }
          : {}),
      },
    });
}

export async function _postIfMatchDeserialize(
  result: PostIfMatch204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Check when only If-Match in header is defined. */
export async function postIfMatch(
  context: Client,
  options: PostIfMatchOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _postIfMatchSend(context, options);
  return _postIfMatchDeserialize(result);
}

export function _postIfNoneMatchSend(
  context: Client,
  options: PostIfNoneMatchOptionalParams = { requestOptions: {} },
): StreamableMethod<PostIfNoneMatch204Response> {
  return context
    .path("/special-headers/conditional-request/if-none-match")
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.ifNoneMatch !== undefined
          ? { "If-None-Match": options?.ifNoneMatch }
          : {}),
      },
    });
}

export async function _postIfNoneMatchDeserialize(
  result: PostIfNoneMatch204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Check when only If-None-Match in header is defined. */
export async function postIfNoneMatch(
  context: Client,
  options: PostIfNoneMatchOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _postIfNoneMatchSend(context, options);
  return _postIfNoneMatchDeserialize(result);
}
