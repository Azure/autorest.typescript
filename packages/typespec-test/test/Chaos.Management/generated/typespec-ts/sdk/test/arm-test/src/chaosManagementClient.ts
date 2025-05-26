// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createChaosManagement,
  ChaosManagementContext,
  ChaosManagementClientOptionalParams,
} from "./api/index.js";
import {
  Capability,
  CapabilityType,
  Operation,
  OperationStatusResult,
  Target,
  TargetType,
} from "./models/models.js";
import {
  ListOptionalParams,
  GetOptionalParams,
  ListOptionalParams_1,
  DeleteOptionalParams,
  CreateOrUpdateOptionalParams,
  GetOptionalParams_1,
  GetOptionalParams_2,
  ListOptionalParams_2,
  ListOptionalParams_3,
  GetOptionalParams_3,
  ListOptionalParams_4,
  DeleteOptionalParams_1,
  CreateOrUpdateOptionalParams_1,
  GetOptionalParams_4,
} from "./api/options.js";
import {
  list,
  get,
  list_1,
  $delete,
  createOrUpdate,
  get_1,
  get_2,
  list_2,
  list_3,
  get_3,
  list_4,
  $delete_1,
  createOrUpdate_1,
  get_4,
} from "./api/operations.js";
import {
  ExperimentsOperations,
  _getExperimentsOperations,
} from "./classic/experiments/index.js";
import { PagedAsyncIterableIterator } from "./static-helpers/pagingHelpers.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { ChaosManagementClientOptionalParams } from "./api/chaosManagementContext.js";

export class ChaosManagementClient {
  private _client: ChaosManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ChaosManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createChaosManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.experiments = _getExperimentsOperations(this._client);
  }

  /** Get a list of Target Type resources for given location. */
  list(
    location: string,
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<TargetType> {
    return list(this._client, location, options);
  }

  /** Get a Target Type resources for given location. */
  get(
    location: string,
    targetTypeName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<TargetType> {
    return get(this._client, location, targetTypeName, options);
  }

  /** Get a list of Target resources that extend a tracked regional resource. */
  list(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    options: ListOptionalParams_1 = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Target> {
    return list_1(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      options,
    );
  }

  /** Delete a Target resource that extends a tracked regional resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options: DeleteOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return $delete(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      options,
    );
  }

  /** Create or update a Target resource that extends a tracked regional resource. */
  createOrUpdate(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    resource: Target,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): Promise<Target> {
    return createOrUpdate(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      resource,
      options,
    );
  }

  /** Get a Target resource that extends a tracked regional resource. */
  get(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options: GetOptionalParams_1 = { requestOptions: {} },
  ): Promise<Target> {
    return get_1(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      options,
    );
  }

  /** Returns the current status of an async operation. */
  get(
    location: string,
    operationId: string,
    options: GetOptionalParams_2 = { requestOptions: {} },
  ): Promise<OperationStatusResult> {
    return get_2(this._client, location, operationId, options);
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams_2 = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Operation> {
    return list_2(this._client, options);
  }

  /** Get a list of Capability Type resources for given Target Type and location. */
  list(
    location: string,
    targetTypeName: string,
    options: ListOptionalParams_3 = { requestOptions: {} },
  ): PagedAsyncIterableIterator<CapabilityType> {
    return list_3(this._client, location, targetTypeName, options);
  }

  /** Get a Capability Type resource for given Target Type and location. */
  get(
    location: string,
    targetTypeName: string,
    capabilityTypeName: string,
    options: GetOptionalParams_3 = { requestOptions: {} },
  ): Promise<CapabilityType> {
    return get_3(
      this._client,
      location,
      targetTypeName,
      capabilityTypeName,
      options,
    );
  }

  /** Get a list of Capability resources that extend a Target resource. */
  list(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options: ListOptionalParams_4 = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Capability> {
    return list_4(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      options,
    );
  }

  /** Delete a Capability that extends a Target resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    options: DeleteOptionalParams_1 = { requestOptions: {} },
  ): Promise<void> {
    return $delete_1(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
      options,
    );
  }

  /** Create or update a Capability resource that extends a Target resource. */
  createOrUpdate(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    resource: Capability,
    options: CreateOrUpdateOptionalParams_1 = { requestOptions: {} },
  ): Promise<Capability> {
    return createOrUpdate_1(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
      resource,
      options,
    );
  }

  /** Get a Capability resource that extends a Target resource. */
  get(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    capabilityName: string,
    options: GetOptionalParams_4 = { requestOptions: {} },
  ): Promise<Capability> {
    return get_4(
      this._client,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
      options,
    );
  }

  /** The operation groups for experiments */
  public readonly experiments: ExperimentsOperations;
}
