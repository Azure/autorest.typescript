// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PollerLike, OperationState } from "@azure/core-lro";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  Fleet,
  FleetUpdate,
  VirtualMachineScaleSetListResult,
  Operation,
} from "./models/models.js";
import {
  ListOptionalParams,
  GetOptionalParams,
  CreateOrUpdateOptionalParams,
  UpdateOptionalParams,
  DeleteOptionalParams,
  ListByResourceGroupOptionalParams,
  ListBySubscriptionOptionalParams,
  ListVirtualMachineScaleSetsOptionalParams,
} from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  createAzureFleet,
  AzureFleetClientOptions,
  AzureFleetContext,
  list,
  get,
  createOrUpdate,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
  listVirtualMachineScaleSets,
} from "./api/index.js";

export { AzureFleetClientOptions } from "./api/azureFleetContext.js";

export class AzureFleetClient {
  private _client: AzureFleetContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: AzureFleetClientOptions = {},
  ) {
    this._client = createAzureFleet(credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Operation> {
    return list(this._client, options);
  }

  /** Get a Fleet */
  get(
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<Fleet> {
    return get(
      this._client,
      subscriptionId,
      resourceGroupName,
      fleetName,
      options,
    );
  }

  /** Create a Fleet */
  createOrUpdate(
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    resource: Fleet,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<Fleet>, Fleet> {
    return createOrUpdate(
      this._client,
      subscriptionId,
      resourceGroupName,
      fleetName,
      resource,
      options,
    );
  }

  /** Update a Fleet */
  update(
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    properties: FleetUpdate,
    options: UpdateOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<Fleet>, Fleet> {
    return update(
      this._client,
      subscriptionId,
      resourceGroupName,
      fleetName,
      properties,
      options,
    );
  }

  /** Delete a Fleet */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    subscriptionId: string,
    resourceGroupName: string,
    fleetName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): PollerLike<OperationState<void>, void> {
    return $delete(
      this._client,
      subscriptionId,
      resourceGroupName,
      fleetName,
      options,
    );
  }

  /** List Fleet resources by resource group */
  listByResourceGroup(
    subscriptionId: string,
    resourceGroupName: string,
    options: ListByResourceGroupOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Fleet> {
    return listByResourceGroup(
      this._client,
      subscriptionId,
      resourceGroupName,
      options,
    );
  }

  /** List Fleet resources by subscription ID */
  listBySubscription(
    subscriptionId: string,
    options: ListBySubscriptionOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Fleet> {
    return listBySubscription(this._client, subscriptionId, options);
  }

  /** List VirtualMachineScaleSet resources by Fleet */
  listVirtualMachineScaleSets(
    subscriptionId: string,
    resourceGroupName: string,
    name: string,
    options: ListVirtualMachineScaleSetsOptionalParams = { requestOptions: {} },
  ): Promise<VirtualMachineScaleSetListResult> {
    return listVirtualMachineScaleSets(
      this._client,
      subscriptionId,
      resourceGroupName,
      name,
      options,
    );
  }
}
