// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { StorageClient } from "./storageClient.js";
export type { DownloadOptionalParams, StorageClientOptionalParams } from "./api/index.js";
export { BlobClient } from "./blob/blobClient.js";
export type {
  BlobClientOptionalParams,
  DownloadOptionalParams as BlobClientDownloadOptionalParams,
} from "./blob/api/index.js";
