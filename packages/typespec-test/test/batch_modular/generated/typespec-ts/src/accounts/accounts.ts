// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createAccounts, AccountsContext, AccountsOptionalParams } from "./api/index.js";
import { ImageInformation, PoolNodeCounts } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { listPoolNodeCounts, listSupportedImages } from "./api/operations.js";
import {
  ListPoolNodeCountsOptionalParams,
  ListSupportedImagesOptionalParams,
} from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { AccountsOptionalParams } from "./api/accountsContext.js";

export class Accounts {
  private _client: AccountsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: TokenCredential,
    options: AccountsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAccounts(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /**
   * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the
   * numbers returned may not always be up to date. If you need exact node counts,
   * use a list query.
   */
  listPoolNodeCounts(
    options: ListPoolNodeCountsOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<PoolNodeCounts> {
    return listPoolNodeCounts(this._client, options);
  }

  /** Lists all Virtual Machine Images supported by the Azure Batch service. */
  listSupportedImages(
    options: ListSupportedImagesOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<ImageInformation> {
    return listSupportedImages(this._client, options);
  }
}
