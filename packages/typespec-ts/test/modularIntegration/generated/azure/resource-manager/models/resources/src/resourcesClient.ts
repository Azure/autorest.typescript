// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
  ResourcesClientOptionalParams,
  ResourcesContext,
} from "./api/index.js";

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
  }

  /** The operation groups for TopLevelTrackedResources */
  public readonly topLevelTrackedResources: TopLevelTrackedResourcesOperations;
  /** The operation groups for NestedProxyResources */
  public readonly nestedProxyResources: NestedProxyResourcesOperations;
}
