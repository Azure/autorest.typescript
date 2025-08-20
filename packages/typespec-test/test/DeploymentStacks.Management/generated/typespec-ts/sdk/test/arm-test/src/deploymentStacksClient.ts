// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDeploymentStacks,
  DeploymentStacksContext,
  DeploymentStacksClientOptionalParams,
} from "./api/index.js";
import {
  DeploymentStacksOperations,
  _getDeploymentStacksOperations,
} from "./classic/deploymentStacks/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DeploymentStacksClientOptionalParams } from "./api/deploymentStacksContext.js";

export class DeploymentStacksClient {
  private _client: DeploymentStacksContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** The APIs listed in this specification can be used to manage Deployment stack resources through the Azure Resource Manager. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DeploymentStacksClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDeploymentStacks(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.deploymentStacks = _getDeploymentStacksOperations(this._client);
  }

  /** The operation groups for deploymentStacks */
  public readonly deploymentStacks: DeploymentStacksOperations;
}
