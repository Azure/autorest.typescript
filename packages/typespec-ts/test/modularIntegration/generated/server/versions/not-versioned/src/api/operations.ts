// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NotVersionedContext as Client,
  WithoutApiVersion200Response,
  WithPathApiVersion200Response,
  WithQueryApiVersion200Response,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  WithoutApiVersionOptionalParams,
  WithQueryApiVersionOptionalParams,
  WithPathApiVersionOptionalParams,
} from "./options.js";

export function _withoutApiVersionSend(
  context: Client,
  options: WithoutApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod<WithoutApiVersion200Response> {
  return context
    .path("/server/versions/not-versioned/without-api-version")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _withoutApiVersionDeserialize(
  result: WithoutApiVersion200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function withoutApiVersion(
  context: Client,
  options: WithoutApiVersionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withoutApiVersionSend(context, options);
  return _withoutApiVersionDeserialize(result);
}

export function _withQueryApiVersionSend(
  context: Client,
  apiVersion: string,
  options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod<WithQueryApiVersion200Response> {
  return context
    .path("/server/versions/not-versioned/with-query-api-version")
    .head({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { "api-version": apiVersion },
    });
}

export async function _withQueryApiVersionDeserialize(
  result: WithQueryApiVersion200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function withQueryApiVersion(
  context: Client,
  apiVersion: string,
  options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQueryApiVersionSend(context, apiVersion, options);
  return _withQueryApiVersionDeserialize(result);
}

export function _withPathApiVersionSend(
  context: Client,
  apiVersion: string,
  options: WithPathApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod<WithPathApiVersion200Response> {
  return context
    .path(
      "/server/versions/not-versioned/with-path-api-version/{apiVersion}",
      apiVersion,
    )
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _withPathApiVersionDeserialize(
  result: WithPathApiVersion200Response,
): Promise<void> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return;
}

export async function withPathApiVersion(
  context: Client,
  apiVersion: string,
  options: WithPathApiVersionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withPathApiVersionSend(context, apiVersion, options);
  return _withPathApiVersionDeserialize(result);
}
