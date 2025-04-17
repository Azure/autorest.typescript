// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext } from "../../api/storageContext.js";
import { DownloadOptionalParams } from "../../blob/api/options.js";
import { download } from "../../blob/api/operations.js";

/** Interface representing a BlobClient operations. */
export interface BlobClientOperations {
  download: (options?: DownloadOptionalParams) => Promise<void>;
}

function _getBlobClient(context: StorageContext) {
  return {
    download: (options?: DownloadOptionalParams) => download(context, options),
  };
}

export function _getBlobClientOperations(
  context: StorageContext,
): BlobClientOperations {
  return {
    ..._getBlobClient(context),
  };
}
