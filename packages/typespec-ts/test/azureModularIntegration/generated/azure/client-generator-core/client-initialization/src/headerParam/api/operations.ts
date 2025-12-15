// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HeaderParamContext as Client } from "./index.js";
import { Input, inputSerializer } from "../../models/models.js";
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
  body: Input,
  options: WithBodyOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/azure/client-generator-core/client-initialization/header-param/with-body",
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { name: context.name, ...options.requestOptions?.headers },
      body: inputSerializer(body),
    });
}

export async function _withBodyDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withBody(
  context: Client,
  body: Input,
  options: WithBodyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withBodySend(context, body, options);
  return _withBodyDeserialize(result);
}

export function _withQuerySend(
  context: Client,
  id: string,
  options: WithQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/header-param/with-query{?id}",
    {
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

export async function _withQueryDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withQuery(
  context: Client,
  id: string,
  options: WithQueryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQuerySend(context, id, options);
  return _withQueryDeserialize(result);
}
