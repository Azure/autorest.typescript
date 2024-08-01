// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ManagedIdentityTrackedResource } from "./models/models.js";
import {
  GetOptionalParams,
  CreateWithSystemAssignedOptionalParams,
  UpdateWithUserAssignedAndSystemAssignedOptionalParams,
} from "./models/options.js";
import {
  createManagedIdentity,
  ManagedIdentityClientOptionalParams,
  ManagedIdentityContext,
  get,
  createWithSystemAssigned,
  updateWithUserAssignedAndSystemAssigned,
} from "./api/index.js";

export { ManagedIdentityClientOptionalParams } from "./api/managedIdentityContext.js";

export class ManagedIdentityClient {
  private _client: ManagedIdentityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Arm Managed Identity Provider management API. */
  constructor(options: ManagedIdentityClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createManagedIdentity({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Get a ManagedIdentityTrackedResource */
  get(
    subscriptionId: string,
    resourceGroupName: string,
    managedIdentityTrackedResourceName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ManagedIdentityTrackedResource> {
    return get(
      this._client,
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
      options,
    );
  }

  /** Create a ManagedIdentityTrackedResource */
  createWithSystemAssigned(
    subscriptionId: string,
    resourceGroupName: string,
    managedIdentityTrackedResourceName: string,
    resource: ManagedIdentityTrackedResource,
    options: CreateWithSystemAssignedOptionalParams = { requestOptions: {} },
  ): Promise<ManagedIdentityTrackedResource> {
    return createWithSystemAssigned(
      this._client,
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
      resource,
      options,
    );
  }

  /** Update a ManagedIdentityTrackedResource */
  updateWithUserAssignedAndSystemAssigned(
    subscriptionId: string,
    resourceGroupName: string,
    managedIdentityTrackedResourceName: string,
    properties: ManagedIdentityTrackedResource,
    options: UpdateWithUserAssignedAndSystemAssignedOptionalParams = {
      requestOptions: {},
    },
  ): Promise<ManagedIdentityTrackedResource> {
    return updateWithUserAssignedAndSystemAssigned(
      this._client,
      subscriptionId,
      resourceGroupName,
      managedIdentityTrackedResourceName,
      properties,
      options,
    );
  }
}
