// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { StorageClient } from "./storageClient.js";
export {
  DownloadOptionalParams,
  StorageClientOptionalParams,
} from "./api/index.js";
export { BlobClientDownloadOptionalParams } from "./api/blobClient/index.js";
export { BlobClientOperations } from "./classic/index.js";
export { BlobClient } from "./blob/blobClient.js";
export {
  BlobClientOptionalParams,
  DownloadOptionalParams as BlobClientDownloadOptionalParams,
} from "./blob/api/index.js";
