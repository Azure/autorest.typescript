// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageContext, StorageClientOptionalParams, createStorage } from "./api/index.js";
import { download } from "./api/operations.js";
import { DownloadOptionalParams } from "./api/options.js";
import { BlobClientOperations, _getBlobClientOperations } from "./classic/blobClient/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StorageClientOptionalParams } from "./api/storageContext.js";

export class StorageClient {
  private _client: StorageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpointParam: string, options: StorageClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStorage(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.blobClient = _getBlobClientOperations(this._client);
  }

  download(
    accountName: string,
    options: DownloadOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return download(this._client, accountName, options);
  }

  /** The operation groups for blobClient */
  public readonly blobClient: BlobClientOperations;
}
