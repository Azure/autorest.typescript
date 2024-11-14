// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import { download } from "../../api/blobClient/index.js";
import { BlobClientDownloadOptionalParams } from "../../api/options.js";

/** Interface representing a BlobClient operations. */
export interface BlobClientOperations {
  download: (
    accountName: string,
    blobName: string,
    options?: BlobClientDownloadOptionalParams,
  ) => Promise<void>;
}

export function getBlobClient(context: StorageContext) {
  return {
    download: (
      accountName: string,
      blobName: string,
      options?: BlobClientDownloadOptionalParams,
    ) => download(context, accountName, blobName, options),
  };
}

export function getBlobClientOperations(
  context: StorageContext,
): BlobClientOperations {
  return {
    ...getBlobClient(context),
  };
}
