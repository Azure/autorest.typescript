// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChildContext as Client } from "./index.js";
import { BlobProperties, blobPropertiesDeserializer } from "../../../models/models.js";
import { expandUrlTemplate } from "../../../static-helpers/urlTemplate.js";
import {
  DeleteStandaloneOptionalParams,
  GetStandaloneOptionalParams,
  WithQueryOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _deleteStandaloneSend(
  context: Client,
  options: DeleteStandaloneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/child-client/{blobName}",
    {
      blobName: context.blobName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteStandaloneDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteStandalone(
  context: Client,
  options: DeleteStandaloneOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteStandaloneSend(context, options);
  return _deleteStandaloneDeserialize(result);
}

export function _getStandaloneSend(
  context: Client,
  options: GetStandaloneOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/child-client/{blobName}/get-standalone",
    {
      blobName: context.blobName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getStandaloneDeserialize(
  result: PathUncheckedResponse,
): Promise<BlobProperties> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return blobPropertiesDeserializer(result.body);
}

export async function getStandalone(
  context: Client,
  options: GetStandaloneOptionalParams = { requestOptions: {} },
): Promise<BlobProperties> {
  const result = await _getStandaloneSend(context, options);
  return _getStandaloneDeserialize(result);
}

export function _withQuerySend(
  context: Client,
  options: WithQueryOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/azure/client-generator-core/client-initialization/child-client/{blobName}/with-query{?format}",
    {
      blobName: context.blobName,
      format: options?.format,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
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
  options: WithQueryOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _withQuerySend(context, options);
  return _withQueryDeserialize(result);
}
