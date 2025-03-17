// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getSAPApplicationServerInstancesOperations,
  SAPApplicationServerInstancesOperations,
} from "./classic/sapApplicationServerInstances/index.js";
import {
  _getSAPDatabaseInstancesOperations,
  SAPDatabaseInstancesOperations,
} from "./classic/sapDatabaseInstances/index.js";
import {
  _getSAPCentralServerInstancesOperations,
  SAPCentralServerInstancesOperations,
} from "./classic/sapCentralServerInstances/index.js";
import {
  _getSAPVirtualInstancesOperations,
  SAPVirtualInstancesOperations,
} from "./classic/sapVirtualInstances/index.js";
import {
  _getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createWorkloads,
  WorkloadsContext,
  WorkloadsClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { WorkloadsClientOptionalParams } from "./api/workloadsContext.js";

export class WorkloadsClient {
  private _client: WorkloadsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Workloads client provides access to various workload operations. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: WorkloadsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createWorkloads(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.sapApplicationServerInstances =
      _getSAPApplicationServerInstancesOperations(this._client);
    this.sapDatabaseInstances = _getSAPDatabaseInstancesOperations(
      this._client,
    );
    this.sapCentralServerInstances = _getSAPCentralServerInstancesOperations(
      this._client,
    );
    this.sapVirtualInstances = _getSAPVirtualInstancesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for sapApplicationServerInstances */
  public readonly sapApplicationServerInstances: SAPApplicationServerInstancesOperations;
  /** The operation groups for sapDatabaseInstances */
  public readonly sapDatabaseInstances: SAPDatabaseInstancesOperations;
  /** The operation groups for sapCentralServerInstances */
  public readonly sapCentralServerInstances: SAPCentralServerInstancesOperations;
  /** The operation groups for sapVirtualInstances */
  public readonly sapVirtualInstances: SAPVirtualInstancesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
