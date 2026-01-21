// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MixedParamsContext as Client } from "./index.js";
import { _withBodyRequestSerializer } from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { WithBodyOptionalParams, WithQueryOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _withBodySend(
  context: Client,
  region: string,
  body: {
    name: string;
  },
  options: WithBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/mixed-params/with-body{?region}",
    {
      region: region,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { name: context.name, ...options.requestOptions?.headers },
      body: _withBodyRequestSerializer(body),
    });
}

export async function _withBodyDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withBody(
  context: Client,
  region: string,
  body: {
    name: string;
  },
  options: WithBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withBodySend(context, region, body, options);
  return _withBodyDeserialize(result);
}

export function _withQuerySend(
  context: Client,
  region: string,
  id: string,
  options: WithQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/mixed-params/with-query{?region,id}",
    {
      region: region,
      id: id,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { name: context.name, ...options.requestOptions?.headers },
    });
}

export async function _withQueryDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withQuery(
  context: Client,
  region: string,
  id: string,
  options: WithQueryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQuerySend(context, region, id, options);
  return _withQueryDeserialize(result);
}
