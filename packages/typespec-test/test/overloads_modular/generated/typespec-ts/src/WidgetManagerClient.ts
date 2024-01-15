// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getFooOperationsOperations,
  FooOperationsOperations,
} from "./classic/fooOperations/index.js";
import {
  createWidgetManager,
  WidgetManagerClientOptions,
  WidgetManagerContext,
} from "./api/index.js";

export { WidgetManagerClientOptions } from "./api/WidgetManagerContext.js";

export class WidgetManagerClient {
  private _client: WidgetManagerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: WidgetManagerClientOptions = {},
  ) {
    this._client = createWidgetManager(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.fooOperations = getFooOperationsOperations(this._client);
  }

  /** The operation groups for FooOperations */
  public readonly fooOperations: FooOperationsOperations;
}
