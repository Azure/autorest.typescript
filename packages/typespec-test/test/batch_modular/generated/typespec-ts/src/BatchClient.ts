// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getApplicationsOperations,
  ApplicationsOperations,
} from "./classic/applications/index.js";
import { getPoolsOperations, PoolsOperations } from "./classic/pools/index.js";
import {
  getAccountsOperations,
  AccountsOperations,
} from "./classic/accounts/index.js";
import { getJobsOperations, JobsOperations } from "./classic/jobs/index.js";
import {
  getCertificatesOperations,
  CertificatesOperations,
} from "./classic/certificates/index.js";
import {
  getJobSchedulesOperations,
  JobSchedulesOperations,
} from "./classic/jobSchedules/index.js";
import { getTasksOperations, TasksOperations } from "./classic/tasks/index.js";
import { getNodesOperations, NodesOperations } from "./classic/nodes/index.js";
import { createBatch, BatchClientOptions, BatchContext } from "./api/index.js";

export { BatchClientOptions } from "./api/BatchContext.js";

export class BatchClient {
  private _client: BatchContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Batch provides Cloud-scale job scheduling and compute management. */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    options: BatchClientOptions = {},
  ) {
    this._client = createBatch(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
    this.applications = getApplicationsOperations(this._client);
    this.pools = getPoolsOperations(this._client);
    this.accounts = getAccountsOperations(this._client);
    this.jobs = getJobsOperations(this._client);
    this.certificates = getCertificatesOperations(this._client);
    this.jobSchedules = getJobSchedulesOperations(this._client);
    this.tasks = getTasksOperations(this._client);
    this.nodes = getNodesOperations(this._client);
  }

  /** The operation groups for Applications */
  public readonly applications: ApplicationsOperations;
  /** The operation groups for Pools */
  public readonly pools: PoolsOperations;
  /** The operation groups for Accounts */
  public readonly accounts: AccountsOperations;
  /** The operation groups for Jobs */
  public readonly jobs: JobsOperations;
  /** The operation groups for Certificates */
  public readonly certificates: CertificatesOperations;
  /** The operation groups for JobSchedules */
  public readonly jobSchedules: JobSchedulesOperations;
  /** The operation groups for Tasks */
  public readonly tasks: TasksOperations;
  /** The operation groups for Nodes */
  public readonly nodes: NodesOperations;
}
