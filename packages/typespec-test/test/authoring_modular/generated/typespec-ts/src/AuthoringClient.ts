// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getProjectsOperations,
  ProjectsOperations,
} from "./classic/projects/index.js";
import {
  getDeploymentsOperations,
  DeploymentsOperations,
} from "./classic/deployments/index.js";
import { getJobsOperations, JobsOperations } from "./classic/jobs/index.js";
import {
  getGlobalOperations,
  GlobalOperations,
} from "./classic/global/index.js";
import {
  createAuthoring,
  AuthoringClientOptions,
  AuthoringContext,
} from "./api/index.js";

export { AuthoringClientOptions } from "./api/AuthoringContext.js";

export class AuthoringClient {
  private _client: AuthoringContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential,
    options: AuthoringClientOptions = {},
  ) {
    this._client = createAuthoring(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.projects = getProjectsOperations(this._client);
    this.deployments = getDeploymentsOperations(this._client);
    this.jobs = getJobsOperations(this._client);
    this.global = getGlobalOperations(this._client);
  }

  /** The operation groups for Projects */
  public readonly projects: ProjectsOperations;
  /** The operation groups for Deployments */
  public readonly deployments: DeploymentsOperations;
  /** The operation groups for Jobs */
  public readonly jobs: JobsOperations;
  /** The operation groups for Global */
  public readonly global: GlobalOperations;
}
