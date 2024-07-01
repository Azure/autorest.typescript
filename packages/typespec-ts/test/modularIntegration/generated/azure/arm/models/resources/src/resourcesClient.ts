// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getTopLevelTrackedResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/topLevelTrackedResources/index.js";
import {
  getNestedProxyResourcesOperations,
  NestedProxyResourcesOperations,
} from "./classic/nestedProxyResources/index.js";
import {
  createResources,
  ResourcesClientOptions,
  ResourcesContext,
} from "./api/index.js";

export { ResourcesClientOptions } from "./api/resourcesContext.js";

export class ResourcesClient {
  private _client: ResourcesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Arm Resource Provider management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: ResourcesClientOptions = {},
  ) {
    this._client = createResources(credential, options);
    this.pipeline = this._client.pipeline;
    this.topLevelTrackedResources = getTopLevelTrackedResourcesOperations(
      this._client,
      subscriptionId,
    );
    this.nestedProxyResources = getNestedProxyResourcesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for TopLevelTrackedResources */
  public readonly topLevelTrackedResources: TopLevelTrackedResourcesOperations;
  /** The operation groups for NestedProxyResources */
  public readonly nestedProxyResources: NestedProxyResourcesOperations;
}
