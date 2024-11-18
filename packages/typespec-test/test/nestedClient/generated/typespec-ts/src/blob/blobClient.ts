// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  download,
  BlobClientDownloadOptionalParams,
  createStorage,
  StorageContext,
  StorageClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StorageClientOptionalParams } from "../api/storageContext.js";

export class BlobClient {
  private _client: StorageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  private accountName: string;
  private blobName: string;

  constructor(
    endpointParam: string,
    accountName: string,
    blobName: string,
    options: StorageClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStorage(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.accountName = accountName;
    this.blobName = blobName;
  }

  download(
    options: BlobClientDownloadOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return download(this._client, this.accountName, this.blobName, options);
  }
}
