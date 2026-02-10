// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import { blobClientDownload } from "../../api/blobClient/operations.js";
import { BlobClientDownloadOptionalParams } from "../../api/blobClient/options.js";

/** Interface representing a BlobClient operations. */
export interface BlobClientOperations {
  download: (
    accountName: string,
    blobName: string,
    options?: BlobClientDownloadOptionalParams,
  ) => Promise<void>;
}

function _getBlobClient(context: StorageContext) {
  return {
    download: (accountName: string, blobName: string, options?: BlobClientDownloadOptionalParams) =>
      blobClientDownload(context, accountName, blobName, options),
  };
}

export function _getBlobClientOperations(context: StorageContext): BlobClientOperations {
  return {
    ..._getBlobClient(context),
  };
}
