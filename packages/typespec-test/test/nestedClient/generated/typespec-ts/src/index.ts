// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { StorageClient } from "./storageClient.js";
export type { DownloadOptionalParams, StorageClientOptionalParams } from "./api/index.js";
export { RestError, isRestError } from "@azure/core-rest-pipeline";
export { BlobClient } from "./blob/blobClient.js";
export type {
  BlobClientOptionalParams,
  DownloadOptionalParams as BlobClientDownloadOptionalParams,
} from "./blob/api/index.js";
