// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createBlob, BlobContext, BlobClientOptionalParams } from "./api/index.js";
import { download } from "./api/operations.js";
import { DownloadOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BlobClientOptionalParams } from "./api/blobContext.js";

export class BlobClient {
  private _client: BlobContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    accountName: string,
    blobName: string,
    options: BlobClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBlob(endpointParam, accountName, blobName, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  download(options: DownloadOptionalParams = { requestOptions: {} }): Promise<void> {
    return download(this._client, options);
  }
}
