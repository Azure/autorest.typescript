// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { VisibilityModel } from "./models/models.js";
import {
  GetModelOptions,
  HeadModelOptions,
  PutModelOptions,
  PatchModelOptions,
  PostModelOptions,
  DeleteModelOptions,
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

export { VisibilityClientOptions } from "./api/VisibilityContext.js";

export class VisibilityClient {
  private _client: VisibilityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates models with visibility properties. */
  constructor(options: VisibilityClientOptions = {}) {
    this._client = createVisibility(options);
    this.pipeline = this._client.pipeline;
  }

  getModel(
    input: VisibilityModel,
    options: GetModelOptions = { requestOptions: {} }
  ): Promise<VisibilityModel> {
    return getModel(this._client, input, options);
  }

  headModel(
    input: VisibilityModel,
    options: HeadModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return headModel(this._client, input, options);
  }

  putModel(
    input: VisibilityModel,
    options: PutModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return putModel(this._client, input, options);
  }

  patchModel(
    input: VisibilityModel,
    options: PatchModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return patchModel(this._client, input, options);
  }

  postModel(
    input: VisibilityModel,
    options: PostModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return postModel(this._client, input, options);
  }

  deleteModel(
    input: VisibilityModel,
    options: DeleteModelOptions = { requestOptions: {} }
  ): Promise<void> {
    return deleteModel(this._client, input, options);
  }
}
