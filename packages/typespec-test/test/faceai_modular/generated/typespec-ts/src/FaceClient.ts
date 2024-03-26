// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getSessionClientOperations,
  SessionClientOperations,
} from "./classic/sessionClient/index.js";
import { createFace, FaceClientOptions, FaceContext } from "./api/index.js";

export { FaceClientOptions } from "./api/FaceContext.js";

export class FaceClient {
  private _client: FaceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    apiVersion: string,
    options: FaceClientOptions = {},
  ) {
    this._client = createFace(endpoint, credential, apiVersion, options);
    this.pipeline = this._client.pipeline;
    this.sessionClient = getSessionClientOperations(this._client);
  }

  /** The operation groups for SessionClient */
  public readonly sessionClient: SessionClientOperations;
}
