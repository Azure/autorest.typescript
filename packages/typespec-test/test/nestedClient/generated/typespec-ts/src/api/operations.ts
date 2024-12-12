// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext as Client, DownloadOptionalParams } from "./index.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _downloadSend(
  context: Client,
  options: DownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/account/{accountName}", context.accountName)
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
  options: DownloadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _downloadSend(context, options);
  return _downloadDeserialize(result);
}
