// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext as Client } from "./index.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { DownloadOptionalParams } from "./options.js";
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
  const path = expandUrlTemplate(
    "/account/{accountName}",
    {
      accountName: context.accountName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadDeserialize(result: PathUncheckedResponse): Promise<void> {
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
