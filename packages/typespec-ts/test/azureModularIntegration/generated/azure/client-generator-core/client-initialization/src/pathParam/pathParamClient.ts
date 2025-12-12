// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createPathParam, PathParamContext, PathParamClientOptionalParams } from "./api/index.js";
import { BlobProperties } from "../models/models.js";
import { deleteStandalone, getStandalone, withQuery } from "./api/operations.js";
import {
  DeleteStandaloneOptionalParams,
  GetStandaloneOptionalParams,
  WithQueryOptionalParams,
} from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { PathParamClientOptionalParams } from "./api/pathParamContext.js";

export class PathParamClient {
  private _client: PathParamContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(blobName: string, options: PathParamClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createPathParam(blobName, { ...options, userAgentOptions: { userAgentPrefix } });
    this.pipeline = this._client.pipeline;
  }

  deleteStandalone(
    options: DeleteStandaloneOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteStandalone(this._client, options);
  }

  getStandalone(
    options: GetStandaloneOptionalParams = { requestOptions: {} },
  ): Promise<BlobProperties> {
    return getStandalone(this._client, options);
  }

  withQuery(options: WithQueryOptionalParams = { requestOptions: {} }): Promise<void> {
    return withQuery(this._client, options);
  }
}
