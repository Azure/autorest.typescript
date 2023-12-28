// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  User,
  OperationStatus,
  ResourceOperationStatus,
} from "./models/models.js";
import {
  CreateOrReplaceOptions,
  DeleteOperationOptions,
  ExportOperationOptions,
} from "./models/options.js";
import {
  createOrReplace,
  deleteOperation,
  exportOperation,
  createStandard,
  StandardClientOptions,
  StandardContext,
} from "./api/index.js";

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
  ): Promise<User> {
    return createOrReplace(this._client, name, resource, options);
  }

  /** Deletes a User */
  deleteOperation(
    name: string,
    options: DeleteOperationOptions = { requestOptions: {} }
  ): Promise<OperationStatus> {
    return deleteOperation(this._client, name, options);
  }

  /** Exports a User */
  exportOperation(
    name: string,
    format: string,
    options: ExportOperationOptions = { requestOptions: {} }
  ): Promise<ResourceOperationStatus> {
    return exportOperation(this._client, name, format, options);
  }
}
