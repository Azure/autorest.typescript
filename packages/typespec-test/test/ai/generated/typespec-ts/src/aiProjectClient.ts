// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Agents, AgentsOptionalParams } from "./agents/agents.js";
import { Connections, ConnectionsOptionalParams } from "./connections/connections.js";
import { Telemetry, TelemetryOptionalParams } from "./telemetry/telemetry.js";
import { Evaluations, EvaluationsOptionalParams } from "./evaluations/evaluations.js";
import { createAIProject, AIProjectContext, AIProjectClientOptionalParams } from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AIProjectClientOptionalParams } from "./api/aiProjectContext.js";

export class AIProjectClient {
  private _client: AIProjectContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    endpointParam: string;
    subscriptionId: string;
    resourceGroupName: string;
    projectName: string;
    credential: TokenCredential;
    options: AIProjectClientOptionalParams;
  };

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    projectName: string,
    credential: TokenCredential,
    options: AIProjectClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAIProject(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this._clientParams = {
      endpointParam,
      subscriptionId,
      resourceGroupName,
      projectName,
      credential,
      options,
    };
  }

  getAgents(options: AgentsOptionalParams = {}): Agents {
    return new Agents(
      this._clientParams.endpointParam,
      this._clientParams.subscriptionId,
      this._clientParams.resourceGroupName,
      this._clientParams.projectName,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getConnections(options: ConnectionsOptionalParams = {}): Connections {
    return new Connections(
      this._clientParams.endpointParam,
      this._clientParams.subscriptionId,
      this._clientParams.resourceGroupName,
      this._clientParams.projectName,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getTelemetry(options: TelemetryOptionalParams = {}): Telemetry {
    return new Telemetry(
      this._clientParams.endpointParam,
      this._clientParams.subscriptionId,
      this._clientParams.resourceGroupName,
      this._clientParams.projectName,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }

  getEvaluations(options: EvaluationsOptionalParams = {}): Evaluations {
    return new Evaluations(
      this._clientParams.endpointParam,
      this._clientParams.subscriptionId,
      this._clientParams.resourceGroupName,
      this._clientParams.projectName,
      this._clientParams.credential,

      { ...this._clientParams.options, ...options },
    );
  }
}
