// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import { download } from "../../api/blobClient/index.js";
import { BlobClientDownloadOptionalParams } from "../../api/options.js";

/** Interface representing a BlobClient operations. */
export interface BlobClientOperations {
  download: (
    blobName: string,
    options?: BlobClientDownloadOptionalParams,
  ) => Promise<void>;
}

export function getBlobClient(context: StorageContext) {
  return {
    download: (blobName: string, options?: BlobClientDownloadOptionalParams) =>
      download(context, blobName, options),
  };
}

export function getBlobClientOperations(
  context: StorageContext,
): BlobClientOperations {
  return {
    ...getBlobClient(context),
  };
}
