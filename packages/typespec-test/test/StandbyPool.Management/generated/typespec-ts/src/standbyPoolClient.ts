// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getStandbyVirtualMachinePoolsOperations,
  StandbyVirtualMachinePoolsOperations,
} from "./classic/standbyVirtualMachinePools/index.js";
import {
  getStandbyVirtualMachinesOperations,
  StandbyVirtualMachinesOperations,
} from "./classic/standbyVirtualMachines/index.js";
import {
  getStandbyContainerGroupPoolsOperations,
  StandbyContainerGroupPoolsOperations,
} from "./classic/standbyContainerGroupPools/index.js";
import {
  createStandbyPool,
  StandbyPoolClientOptions,
  StandbyPoolContext,
} from "./api/index.js";

export { StandbyPoolClientOptions } from "./api/standbyPoolContext.js";

export class StandbyPoolClient {
  private _client: StandbyPoolContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: StandbyPoolClientOptions = {},
  ) {
    this._client = createStandbyPool(credential, options);
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.standbyVirtualMachinePools = getStandbyVirtualMachinePoolsOperations(
      this._client,
    );
    this.standbyVirtualMachines = getStandbyVirtualMachinesOperations(
      this._client,
    );
    this.standbyContainerGroupPools = getStandbyContainerGroupPoolsOperations(
      this._client,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for StandbyVirtualMachinePools */
  public readonly standbyVirtualMachinePools: StandbyVirtualMachinePoolsOperations;
  /** The operation groups for StandbyVirtualMachines */
  public readonly standbyVirtualMachines: StandbyVirtualMachinesOperations;
  /** The operation groups for StandbyContainerGroupPools */
  public readonly standbyContainerGroupPools: StandbyContainerGroupPoolsOperations;
}
