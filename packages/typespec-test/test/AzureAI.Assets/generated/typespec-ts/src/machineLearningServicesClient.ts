// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createMachineLearningServices,
  MachineLearningServicesContext,
  MachineLearningServicesClientOptionalParams,
} from "./api/index.js";
import {
  IndexesOperations,
  _getIndexesOperations,
} from "./classic/indexes/index.js";
import {
  PromptsOperations,
  _getPromptsOperations,
} from "./classic/prompts/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { MachineLearningServicesClientOptionalParams } from "./api/machineLearningServicesContext.js";

export class MachineLearningServicesClient {
  private _client: MachineLearningServicesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
    credential: TokenCredential,
    options: MachineLearningServicesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createMachineLearningServices(
      endpointParam,
      subscriptionId,
      resourceGroupName,
      workspaceName,
      credential,
      { ...options, userAgentOptions: { userAgentPrefix } },
    );
    this.pipeline = this._client.pipeline;
    this.prompts = _getPromptsOperations(this._client);
    this.indexes = _getIndexesOperations(this._client);
  }

  /** The operation groups for prompts */
  public readonly prompts: PromptsOperations;
  /** The operation groups for indexes */
  public readonly indexes: IndexesOperations;
}
