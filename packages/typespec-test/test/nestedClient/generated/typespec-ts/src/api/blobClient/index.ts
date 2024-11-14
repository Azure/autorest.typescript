// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BlobClientDownloadOptionalParams,
  StorageContext as Client,
} from "../index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadSend(
  context: Client,
  blobName: string,
  options: BlobClientDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/blob/{blobName}", blobName)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function download(
  context: Client,
  blobName: string,
  options: BlobClientDownloadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _downloadSend(context, blobName, options);
  return _downloadDeserialize(result);
}
