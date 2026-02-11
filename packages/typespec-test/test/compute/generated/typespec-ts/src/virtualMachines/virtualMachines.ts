// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createVirtualMachines,
  VirtualMachinesContext,
  VirtualMachinesOptionalParams,
} from "./api/index.js";
import { ComputeVirtualMachine } from "../models/compute/models.js";
import { createOrUpdate, get } from "./api/operations.js";
import { CreateOrUpdateOptionalParams, GetOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { PollerLike, OperationState } from "@azure/core-lro";
import { Pipeline } from "@azure/core-rest-pipeline";

export { VirtualMachinesOptionalParams } from "./api/virtualMachinesContext.js";

export class VirtualMachines {
  private _client: VirtualMachinesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: VirtualMachinesOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createVirtualMachines(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** The operation to create or update a virtual machine. Please note some properties can be set only during virtual machine creation. */
  createOrUpdate(
    resourceGroupName: string,
    vmName: string,
    resource: ComputeVirtualMachine,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<ComputeVirtualMachine>, ComputeVirtualMachine> {
    return createOrUpdate(this._client, resourceGroupName, vmName, resource, options);
  }

  /** Retrieves information about the model view or the instance view of a virtual machine. */
  get(
    resourceGroupName: string,
    vmName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ComputeVirtualMachine> {
    return get(this._client, resourceGroupName, vmName, options);
  }
}
