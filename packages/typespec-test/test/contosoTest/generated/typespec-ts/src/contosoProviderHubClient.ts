// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createContosoProviderHub,
  ContosoProviderHubContext,
  ContosoProviderHubClientOptionalParams,
} from "./api/index.js";
import {
  EmployeesOperations,
  _getEmployeesOperations,
} from "./classic/employees/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ContosoProviderHubClientOptionalParams } from "./api/contosoProviderHubContext.js";

export class ContosoProviderHubClient {
  private _client: ContosoProviderHubContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Contoso Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ContosoProviderHubClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createContosoProviderHub(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.employees = _getEmployeesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for employees */
  public readonly employees: EmployeesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
