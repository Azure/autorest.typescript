// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createAIProject,
  AIProjectContext,
  AIProjectClientOptionalParams,
} from "./api/index.js";
import {
  AgentsOperations,
  _getAgentsOperations,
} from "./classic/agents/index.js";
import {
  ConnectionsOperations,
  _getConnectionsOperations,
} from "./classic/connections/index.js";
import {
  EvaluationsOperations,
  _getEvaluationsOperations,
} from "./classic/evaluations/index.js";
import {
  TelemetryOperations,
  _getTelemetryOperations,
} from "./classic/telemetry/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AIProjectClientOptionalParams } from "./api/aiProjectContext.js";

export class AIProjectClient {
  private _client: AIProjectContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options?: AIProjectClientOptionalParams,
  );
  constructor(
    endpointParam: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    subscriptionId: string,
    options?: AIProjectClientOptionalParams,
  );
  constructor(
    endpointParam: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | AIProjectClientOptionalParams,
    options?: AIProjectClientOptionalParams,
  ) {
    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    options = options ?? {};
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAIProject(
      endpointParam,
      subscriptionId ?? "",
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this.evaluations = _getEvaluationsOperations(this._client);
    this.telemetry = _getTelemetryOperations(this._client);
    this.connections = _getConnectionsOperations(this._client);
    this.agents = _getAgentsOperations(this._client);
  }

  /** The operation groups for evaluations */
  public readonly evaluations: EvaluationsOperations;
  /** The operation groups for telemetry */
  public readonly telemetry: TelemetryOperations;
  /** The operation groups for connections */
  public readonly connections: ConnectionsOperations;
  /** The operation groups for agents */
  public readonly agents: AgentsOperations;
}
