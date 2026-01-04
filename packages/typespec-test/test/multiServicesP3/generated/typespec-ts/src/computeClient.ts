// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createCompute, ComputeContext, ComputeClientOptionalParams } from "./api/index.js";
import {
  DiskAccessesOperations,
  _getDiskAccessesOperations,
} from "./computeDisk/classic/diskAccesses/index.js";
import { DisksOperations, _getDisksOperations } from "./computeDisk/classic/disks/index.js";
import {
  RestorePointCollectionsOperations,
  _getRestorePointCollectionsOperations,
} from "./compute/classic/restorePointCollections/index.js";
import {
  VirtualMachinesOperations,
  _getVirtualMachinesOperations,
} from "./compute/classic/virtualMachines/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { ComputeClient as ComputeComputeClient } from "./compute/computeClient.js";
import { ComputeDiskClient } from "./computeDisk/computeDiskClient.js";

export { ComputeClientOptionalParams } from "./api/computeContext.js";

export class ComputeClient {
  private _client: ComputeContext;
  private _computeClient: ComputeComputeClient;
  private _computeDiskClient: ComputeDiskClient;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options?: ComputeClientOptionalParams);
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: ComputeClientOptionalParams,
  );
  /** Compute Client */
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | ComputeClientOptionalParams,
    options?: ComputeClientOptionalParams,
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
    this._client = createCompute(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this._computeClient = new ComputeComputeClient(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this._computeDiskClient = new ComputeDiskClient(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.diskAccesses = this._computeDiskClient.diskAccesses;
    this.disks = this._computeDiskClient.disks;
    this.restorePointCollections = this._computeClient.restorePointCollections;
    this.virtualMachines = this._computeClient.virtualMachines;
  }

  /** The operation groups for diskAccesses */
  public readonly diskAccesses: DiskAccessesOperations;
  /** The operation groups for disks */
  public readonly disks: DisksOperations;
  /** The operation groups for restorePointCollections */
  public readonly restorePointCollections: RestorePointCollectionsOperations;
  /** The operation groups for virtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
}
