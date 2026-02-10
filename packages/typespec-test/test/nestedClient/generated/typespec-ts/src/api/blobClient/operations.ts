// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext as Client } from "../index.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import { BlobClientDownloadOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _blobClientDownloadSend(
  context: Client,
  accountName: string,
  blobName: string,
  options: BlobClientDownloadOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/account/{accountName}/blob/{blobName}",
    {
      accountName: accountName,
      blobName: blobName,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({ ...operationOptionsToRequestParameters(options) });
}

export async function _blobClientDownloadDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function blobClientDownload(
  context: Client,
  accountName: string,
  blobName: string,
  options: BlobClientDownloadOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _blobClientDownloadSend(context, accountName, blobName, options);
  return _blobClientDownloadDeserialize(result);
}
