// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Applications, ApplicationsOptionalParams } from "./applications/applications.js";
import { Pools, PoolsOptionalParams } from "./pools/pools.js";
import { Accounts, AccountsOptionalParams } from "./accounts/accounts.js";
import { Jobs, JobsOptionalParams } from "./jobs/jobs.js";
import { Certificates, CertificatesOptionalParams } from "./certificates/certificates.js";
import { JobSchedules, JobSchedulesOptionalParams } from "./jobSchedules/jobSchedules.js";
import { Tasks, TasksOptionalParams } from "./tasks/tasks.js";
import { Nodes, NodesOptionalParams } from "./nodes/nodes.js";
import { createBatch, BatchContext, BatchClientOptionalParams } from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { BatchClientOptionalParams } from "./api/batchContext.js";

export class BatchClient {
  private _client: BatchContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    credential: TokenCredential;
    options: BatchClientOptionalParams;
  };

  /** Azure Batch provides Cloud-scale job scheduling and compute management. */
  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: BatchClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createBatch(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { endpointParam, credential, options };
  }

  getApplications(options: ApplicationsOptionalParams = {}): Applications {
    return new Applications(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getPools(options: PoolsOptionalParams = {}): Pools {
    return new Pools(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getAccounts(options: AccountsOptionalParams = {}): Accounts {
    return new Accounts(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getJobs(options: JobsOptionalParams = {}): Jobs {
    return new Jobs(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getCertificates(options: CertificatesOptionalParams = {}): Certificates {
    return new Certificates(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getJobSchedules(options: JobSchedulesOptionalParams = {}): JobSchedules {
    return new JobSchedules(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getTasks(options: TasksOptionalParams = {}): Tasks {
    return new Tasks(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getNodes(options: NodesOptionalParams = {}): Nodes {
    return new Nodes(
      this._clientParams.endpointParam,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
