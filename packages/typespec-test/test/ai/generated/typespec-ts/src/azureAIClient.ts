// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getEvaluationsOperations,
  EvaluationsOperations,
} from "./classic/evaluations/index.js";
import {
  getConnectionsOperations,
  ConnectionsOperations,
} from "./classic/connections/index.js";
import {
  getAgentsOperations,
  AgentsOperations,
} from "./classic/agents/index.js";
import {
  createAzureAI,
  AzureAIContext,
  AzureAIClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AzureAIClientOptionalParams } from "./api/azureAIContext.js";

export class AzureAIClient {
  private _client: AzureAIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: AzureAIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAzureAI(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this.evaluations = getEvaluationsOperations(this._client);
    this.connections = getConnectionsOperations(this._client);
    this.agents = getAgentsOperations(this._client);
  }

  /** The operation groups for evaluations */
  public readonly evaluations: EvaluationsOperations;
  /** The operation groups for connections */
  public readonly connections: ConnectionsOperations;
  /** The operation groups for agents */
  public readonly agents: AgentsOperations;
}
