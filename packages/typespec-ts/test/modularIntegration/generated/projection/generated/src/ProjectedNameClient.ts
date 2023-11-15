// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { OperationOptions, ParameterOptions } from "./models/options.js";
import {
  getPropertyOperations,
  PropertyOperations,
} from "./classic/property/index.js";
import {
  operation,
  parameter,
  createProjectedName,
  ProjectedNameClientOptions,
  ProjectedNameContext,
} from "./api/index.js";

export { ProjectedNameClientOptions } from "./api/ProjectedNameContext.js";

export class ProjectedNameClient {
  private _client: ProjectedNameContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Projection */
  constructor(options: ProjectedNameClientOptions = {}) {
    this._client = createProjectedName(options);
    this.pipeline = this._client.pipeline;
    this.property = getPropertyOperations(this._client);
  }

  /** The operation groups for Property */
  public readonly property: PropertyOperations;

  operation(options: OperationOptions = { requestOptions: {} }): Promise<void> {
    return operation(this._client, options);
  }

  parameter(
    defaultName: string,
    options: ParameterOptions = { requestOptions: {} }
  ): Promise<void> {
    return parameter(this._client, defaultName, options);
  }
}
