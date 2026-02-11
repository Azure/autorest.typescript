// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VirtualMachines,
  VirtualMachinesOptionalParams,
} from "./virtualMachines/virtualMachines.js";
import {
  RestorePointCollections,
  RestorePointCollectionsOptionalParams,
} from "./restorePointCollections/restorePointCollections.js";
import { ActionGroups, ActionGroupsOptionalParams } from "./actionGroups/actionGroups.js";
import { Disks, DisksOptionalParams } from "./disks/disks.js";
import { DiskAccesses, DiskAccessesOptionalParams } from "./diskAccesses/diskAccesses.js";
import { createCompute, ComputeContext, ComputeClientOptionalParams } from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ComputeClientOptionalParams } from "./api/computeContext.js";

export class ComputeClient {
  private _client: ComputeContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    subscriptionId: string;
    options: ComputeClientOptionalParams;
  };

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
    this._clientParams = { credential, subscriptionId, options };
  }

  getVirtualMachines(options: VirtualMachinesOptionalParams = {}): VirtualMachines {
    return new VirtualMachines(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getRestorePointCollections(
    options: RestorePointCollectionsOptionalParams = {},
  ): RestorePointCollections {
    return new RestorePointCollections(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getActionGroups(options: ActionGroupsOptionalParams = {}): ActionGroups {
    return new ActionGroups(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getDisks(options: DisksOptionalParams = {}): Disks {
    return new Disks(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  getDiskAccesses(options: DiskAccessesOptionalParams = {}): DiskAccesses {
    return new DiskAccesses(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }
}
