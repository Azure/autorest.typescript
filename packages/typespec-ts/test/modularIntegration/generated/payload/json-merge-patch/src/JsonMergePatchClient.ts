// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Resource, ResourcePatch } from "./models/models.js";
import {
  CreateResourceOptions,
  UpdateResourceOptions,
  UpdateOptionalResourceOptions,
} from "./models/options.js";
import {
  createJsonMergePatch,
  JsonMergePatchClientOptions,
  JsonMergePatchContext,
  createResource,
  updateResource,
  updateOptionalResource,
} from "./api/index.js";

export { JsonMergePatchClientOptions } from "./api/JsonMergePatchContext.js";

export class JsonMergePatchClient {
  private _client: JsonMergePatchContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for merge-patch+json content-type */
  constructor(options: JsonMergePatchClientOptions = {}) {
    this._client = createJsonMergePatch(options);
    this.pipeline = this._client.pipeline;
  }

  /** Test content-type: application/merge-patch+json with required body */
  createResource(
    body: Resource,
    options: CreateResourceOptions = { requestOptions: {} },
  ): Promise<Resource> {
    return createResource(this._client, body, options);
  }

  /** Test content-type: application/merge-patch+json with required body */
  updateResource(
    body: ResourcePatch,
    options: UpdateResourceOptions = { requestOptions: {} },
  ): Promise<Resource> {
    return updateResource(this._client, body, options);
  }

  /** Test content-type: application/merge-patch+json with optional body */
  updateOptionalResource(
    body: ResourcePatch,
    options: UpdateOptionalResourceOptions = { requestOptions: {} },
  ): Promise<Resource> {
    return updateOptionalResource(this._client, body, options);
  }
}
