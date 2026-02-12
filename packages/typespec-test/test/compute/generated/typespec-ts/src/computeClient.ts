// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createCompute, ComputeContext, ComputeClientOptionalParams } from "./api/index.js";
import {
  ActionGroupsOperations,
  _getActionGroupsOperations,
} from "./classic/actionGroups/index.js";
import {
  DiskAccessesOperations,
  _getDiskAccessesOperations,
} from "./classic/diskAccesses/index.js";
import { DisksOperations, _getDisksOperations } from "./classic/disks/index.js";
import {
  RestorePointCollectionsOperations,
  _getRestorePointCollectionsOperations,
} from "./classic/restorePointCollections/index.js";
import {
  VirtualMachinesOperations,
  _getVirtualMachinesOperations,
} from "./classic/virtualMachines/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ComputeClientOptionalParams } from "./api/computeContext.js";

export class ComputeClient {
  private _client: ComputeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Compute Client */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ComputeClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCompute(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.actionGroups = _getActionGroupsOperations(this._client);
    this.diskAccesses = _getDiskAccessesOperations(this._client);
    this.disks = _getDisksOperations(this._client);
    this.restorePointCollections = _getRestorePointCollectionsOperations(this._client);
    this.virtualMachines = _getVirtualMachinesOperations(this._client);
  }

  /** The operation groups for actionGroups */
  public readonly actionGroups: ActionGroupsOperations;
  /** The operation groups for diskAccesses */
  public readonly diskAccesses: DiskAccessesOperations;
  /** The operation groups for disks */
  public readonly disks: DisksOperations;
  /** The operation groups for restorePointCollections */
  public readonly restorePointCollections: RestorePointCollectionsOperations;
  /** The operation groups for virtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
}
