// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParamAliasContext as Client } from "./index.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { WithOriginalNameOptionalParams, WithAliasedNameOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _withOriginalNameSend(
  context: Client,
  options: WithOriginalNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/param-alias/{blobName}/with-original-name",
    {
      blobName: context.blobName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _withOriginalNameDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withOriginalName(
  context: Client,
  options: WithOriginalNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withOriginalNameSend(context, options);
  return _withOriginalNameDeserialize(result);
}

export function _withAliasedNameSend(
  context: Client,
  options: WithAliasedNameOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/param-alias/{blob}/with-aliased-name",
    {
      blob: context.blobName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _withAliasedNameDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function withAliasedName(
  context: Client,
  options: WithAliasedNameOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withAliasedNameSend(context, options);
  return _withAliasedNameDeserialize(result);
}
