// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BlobClient, BlobClientOptionalParams } from "./blob/blobClient.js";
import {
  createStorage,
  StorageContext,
  StorageClientOptionalParams,
} from "./api/index.js";
import { DownloadOptionalParams } from "./api/options.js";
import { download } from "./api/operations.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { StorageClientOptionalParams } from "./api/storageContext.js";

export class StorageClient {
  private _client: StorageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _parentClientParams: {
    endpointParam: string;
    accountName: string;
    options: StorageClientOptionalParams;
  };

  constructor(
    endpointParam: string,
    accountName: string,
    options: StorageClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createStorage(endpointParam, accountName, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._parentClientParams = { endpointParam, accountName, options };
  }

  download(
    options: DownloadOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return download(this._client, options);
  }

  getBlobClient(
    blobName: string,
    options: BlobClientOptionalParams = {},
  ): BlobClient {
    return new BlobClient(
      this._parentClientParams.endpointParam,
      this._parentClientParams.accountName,
      blobName,
      { ...this._parentClientParams.options, ...options },
    );
  }
}
