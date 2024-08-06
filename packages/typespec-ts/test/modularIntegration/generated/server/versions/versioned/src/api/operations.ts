// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { VersionedContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  WithoutApiVersionOptionalParams,
  WithQueryApiVersionOptionalParams,
  WithPathApiVersionOptionalParams,
  WithQueryOldApiVersionOptionalParams,
} from "../models/options.js";

export function _withoutApiVersionSend(
  context: Client,
  options: WithoutApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/server/versions/versioned/without-api-version")
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _withoutApiVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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
  options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/server/versions/versioned/with-query-api-version")
    .head({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2022-12-01-preview",
      },
    });
}

export async function _withQueryApiVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withQueryApiVersion(
  context: Client,
  options: WithQueryApiVersionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQueryApiVersionSend(context, options);
  return _withQueryApiVersionDeserialize(result);
}

export function _withPathApiVersionSend(
  context: Client,
  apiVersion: string,
  options: WithPathApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/server/versions/versioned/with-path-api-version/{apiVersion}",
      apiVersion,
    )
    .head({ ...operationOptionsToRequestParameters(options) });
}

export async function _withPathApiVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
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

export function _withQueryOldApiVersionSend(
  context: Client,
  options: WithQueryOldApiVersionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/server/versions/versioned/with-query-old-api-version")
    .head({
      ...operationOptionsToRequestParameters(options),
      queryParameters: {
        "api-version": options?.apiVersion ?? "2022-12-01-preview",
      },
    });
}

export async function _withQueryOldApiVersionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withQueryOldApiVersion(
  context: Client,
  options: WithQueryOldApiVersionOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQueryOldApiVersionSend(context, options);
  return _withQueryOldApiVersionDeserialize(result);
}
