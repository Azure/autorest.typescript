// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getTopLevelTrackedResourcesOperations,
  TopLevelTrackedResourcesOperations,
} from "./classic/topLevelTrackedResources/index.js";
import {
  getNestedProxyResourcesOperations,
  NestedProxyResourcesOperations,
} from "./classic/nestedProxyResources/index.js";
import {
  getSingletonTrackedResourcesOperations,
  SingletonTrackedResourcesOperations,
} from "./classic/singletonTrackedResources/index.js";
import {
  createResources,
  ResourcesContext,
  ResourcesClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ResourcesClientOptionalParams } from "./api/resourcesContext.js";

export class ResourcesClient {
  private _client: ResourcesContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Arm Resource Provider management API. */
  constructor(
    subscriptionId: string,
    options: ResourcesClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createResources({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.topLevelTrackedResources = getTopLevelTrackedResourcesOperations(
      this._client,
      subscriptionId,
    );
    this.nestedProxyResources = getNestedProxyResourcesOperations(
      this._client,
      subscriptionId,
    );
    this.singletonTrackedResources = getSingletonTrackedResourcesOperations(
      this._client,
      subscriptionId,
    );
  }

  /** The operation groups for TopLevelTrackedResources */
  public readonly topLevelTrackedResources: TopLevelTrackedResourcesOperations;
  /** The operation groups for NestedProxyResources */
  public readonly nestedProxyResources: NestedProxyResourcesOperations;
  /** The operation groups for SingletonTrackedResources */
  public readonly singletonTrackedResources: SingletonTrackedResourcesOperations;
}
