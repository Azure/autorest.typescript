// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { User, ExportedUser } from "./models/models.js";
import {
  CreateOrReplaceOptions,
  DeleteOperationOptions,
  ExportOperationOptions
} from "./models/options.js";
import {
  createOrReplace,
  deleteOperation,
  exportOperation,
  createStandard,
  StandardClientOptions,
  StandardContext
} from "./api/index.js";
import { OperationState, PromisePollerLike } from "@azure/core-lro";

export { StandardClientOptions } from "./api/StandardContext.js";

export class StandardClient {
  private _client: StandardContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates bodies templated with Azure Core with long-running operation */
  constructor(options: StandardClientOptions = {}) {
    this._client = createStandard(options);
    this.pipeline = this._client.pipeline;
  }

  /** Creates or replaces a User */
  createOrReplace(
    name: string,
    resource: User,
    options: CreateOrReplaceOptions = { requestOptions: {} }
  ): PromisePollerLike<OperationState<User>, User> {
    return createOrReplace(this._client, name, resource, options);
  }

  /** Deletes a User */
  deleteOperation(
    name: string,
    options: DeleteOperationOptions = { requestOptions: {} }
  ): PromisePollerLike<OperationState<void>, void> {
    return deleteOperation(this._client, name, options);
  }

  /** Exports a User */
  exportOperation(
    name: string,
    format: string,
    options: ExportOperationOptions = { requestOptions: {} }
  ): PromisePollerLike<OperationState<ExportedUser>, ExportedUser> {
    return exportOperation(this._client, name, format, options);
  }
}
