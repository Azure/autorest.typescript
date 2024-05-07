// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getFleetsOperations,
  FleetsOperations,
} from "./classic/fleets/index.js";
import {
  getFleetMembersOperations,
  FleetMembersOperations,
} from "./classic/fleetMembers/index.js";
import {
  getUpdateRunsOperations,
  UpdateRunsOperations,
} from "./classic/updateRuns/index.js";
import {
  getFleetUpdateStrategiesOperations,
  FleetUpdateStrategiesOperations,
} from "./classic/fleetUpdateStrategies/index.js";
import {
  createContainerService,
  ContainerServiceClientOptions,
  ContainerServiceContext,
} from "./api/index.js";

export { ContainerServiceClientOptions } from "./api/containerServiceContext.js";

export class ContainerServiceClient {
  private _client: ContainerServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Kubernetes Fleet Manager api client. */
  constructor(
    credential: TokenCredential,
    options: ContainerServiceClientOptions = {},
  ) {
    this._client = createContainerService(credential, options);
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.fleets = getFleetsOperations(this._client);
    this.fleetMembers = getFleetMembersOperations(this._client);
    this.updateRuns = getUpdateRunsOperations(this._client);
    this.fleetUpdateStrategies = getFleetUpdateStrategiesOperations(
      this._client,
    );
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Fleets */
  public readonly fleets: FleetsOperations;
  /** The operation groups for FleetMembers */
  public readonly fleetMembers: FleetMembersOperations;
  /** The operation groups for UpdateRuns */
  public readonly updateRuns: UpdateRunsOperations;
  /** The operation groups for FleetUpdateStrategies */
  public readonly fleetUpdateStrategies: FleetUpdateStrategiesOperations;
}
