// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createDataProductsCatalogs,
  DataProductsCatalogsContext,
  DataProductsCatalogsOptionalParams,
} from "./api/index.js";
import { DataProductsCatalog } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { listBySubscription, listByResourceGroup, get } from "./api/operations.js";
import {
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  GetOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { DataProductsCatalogsOptionalParams } from "./api/dataProductsCatalogsContext.js";

export class DataProductsCatalogs {
  private _client: DataProductsCatalogsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Operations on data catalog resource. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: DataProductsCatalogsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createDataProductsCatalogs(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List data catalog by subscription. */
  listBySubscription(
    options: ListBySubscriptionOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DataProductsCatalog> {
    return listBySubscription(this._client, options);
  }

  /** List data catalog by resource group. */
  listByResourceGroup(
    resourceGroupName: string,
    options: ListByResourceGroupOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<DataProductsCatalog> {
    return listByResourceGroup(this._client, resourceGroupName, options);
  }

  /** Retrieve data type resource. */
  get(
    resourceGroupName: string,
    options: GetOptionalParams = { requestOptions: {} },
  ): Promise<DataProductsCatalog> {
    return get(this._client, resourceGroupName, options);
  }
}
