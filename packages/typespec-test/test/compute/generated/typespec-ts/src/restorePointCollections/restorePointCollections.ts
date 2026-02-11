// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createRestorePointCollections,
  RestorePointCollectionsContext,
  RestorePointCollectionsOptionalParams,
} from "./api/index.js";
import { ComputeRestorePointCollection } from "../models/compute/models.js";
import { createOrUpdate, get } from "./api/operations.js";
import { CreateOrUpdateOptionalParams, GetOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { RestorePointCollectionsOptionalParams } from "./api/restorePointCollectionsContext.js";

export class RestorePointCollections {
  private _client: RestorePointCollectionsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: RestorePointCollectionsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createRestorePointCollections(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** The operation to create or update the restore point collection. Please refer to https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags may be modified. */
  createOrUpdate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    resource: ComputeRestorePointCollection,
    options: CreateOrUpdateOptionalParams = { requestOptions: {} },
  ): Promise<ComputeRestorePointCollection> {
    return createOrUpdate(
      this._client,
      resourceGroupName,
      restorePointCollectionName,
      resource,
      options,
    );
  }

  /** The operation to get the restore point collection. */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<ComputeRestorePointCollection> {
    return get(this._client, resourceGroupName, restorePointCollectionName, options);
  }
}
