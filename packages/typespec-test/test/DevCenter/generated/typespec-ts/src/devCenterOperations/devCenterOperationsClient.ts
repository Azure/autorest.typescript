// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { Project, OperationState } from "./models/models.js";
import {
  ListProjectsOptionalParams,
  GetProjectOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createDevCenterOperations,
  DevCenterOperationsClientOptions,
  DevCenterServiceContext,
  listProjects,
  getProject,
} from "./api/index.js";

export { DevCenterOperationsClientOptions } from "./api/devCenterOperationsContext.js";

export class DevCenterOperationsClient {
  private _client: DevCenterServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: DevCenterOperationsClientOptions = {},
  ) {
    this._client = createDevCenterOperations(
      endpointParam,
      credential,
      options,
    );
    this.pipeline = this._client.pipeline;
  }

  /** Lists all projects. */
  listProjects(
    options: ListProjectsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Project> {
    return listProjects(this._client, options);
  }

  /** Gets a project. */
  getProject(
    projectName: string,
    options: GetProjectOptionalParams = { requestOptions: {} },
  ): Promise<Project> {
    return getProject(this._client, projectName, options);
  }
}
