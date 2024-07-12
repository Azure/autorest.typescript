// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { VisibilityModel } from "./models/models.js";
import {
  GetModelOptionalParams,
  HeadModelOptionalParams,
  PutModelOptionalParams,
  PatchModelOptionalParams,
  PostModelOptionalParams,
  DeleteModelOptionalParams,
} from "./models/options.js";
import {
  getModel,
  headModel,
  putModel,
  patchModel,
  postModel,
  deleteModel,
  createVisibility,
  VisibilityClientOptions,
  VisibilityContext,
} from "./api/index.js";

export { VisibilityClientOptions } from "./api/visibilityContext.js";

export class VisibilityClient {
  private _client: VisibilityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates models with visibility properties. */
  constructor(options: VisibilityClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createVisibility({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  getModel(
    input: VisibilityModel,
    options: GetModelOptionalParams = { requestOptions: {} },
  ): Promise<VisibilityModel> {
    return getModel(this._client, input, options);
  }

  headModel(
    input: VisibilityModel,
    options: HeadModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return headModel(this._client, input, options);
  }

  putModel(
    input: VisibilityModel,
    options: PutModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  patchModel(
    input: VisibilityModel,
    options: PatchModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return patchModel(this._client, input, options);
  }

  postModel(
    input: VisibilityModel,
    options: PostModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return postModel(this._client, input, options);
  }

  deleteModel(
    input: VisibilityModel,
    options: DeleteModelOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return deleteModel(this._client, input, options);
  }
}
