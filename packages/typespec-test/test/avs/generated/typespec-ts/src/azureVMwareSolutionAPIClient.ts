// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getWorkloadNetworksOperations,
  WorkloadNetworksOperations,
} from "./classic/workloadNetworks/index.js";
import {
  _getWorkloadNetworkDnsZonesOperations,
  WorkloadNetworkDnsZonesOperations,
} from "./classic/workloadNetworkDnsZones/index.js";
import {
  _getScriptExecutionsOperations,
  ScriptExecutionsOperations,
} from "./classic/scriptExecutions/index.js";
import {
  _getPrivateCloudsOperations,
  PrivateCloudsOperations,
} from "./classic/privateClouds/index.js";
import {
  _getClustersOperations,
  ClustersOperations,
} from "./classic/clusters/index.js";
import {
  _getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createAzureVMwareSolutionAPI,
  AzureVMwareSolutionAPIContext,
  AzureVMwareSolutionAPIClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AzureVMwareSolutionAPIClientOptionalParams } from "./api/azureVMwareSolutionAPIContext.js";

export class AzureVMwareSolutionAPIClient {
  private _client: AzureVMwareSolutionAPIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure VMware Solution API */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AzureVMwareSolutionAPIClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAzureVMwareSolutionAPI(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.workloadNetworks = _getWorkloadNetworksOperations(this._client);
    this.workloadNetworkDnsZones = _getWorkloadNetworkDnsZonesOperations(
      this._client,
    );
    this.scriptExecutions = _getScriptExecutionsOperations(this._client);
    this.privateClouds = _getPrivateCloudsOperations(this._client);
    this.clusters = _getClustersOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for workloadNetworks */
  public readonly workloadNetworks: WorkloadNetworksOperations;
  /** The operation groups for workloadNetworkDnsZones */
  public readonly workloadNetworkDnsZones: WorkloadNetworkDnsZonesOperations;
  /** The operation groups for scriptExecutions */
  public readonly scriptExecutions: ScriptExecutionsOperations;
  /** The operation groups for privateClouds */
  public readonly privateClouds: PrivateCloudsOperations;
  /** The operation groups for clusters */
  public readonly clusters: ClustersOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
