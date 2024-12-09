// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getDataProductsOperations,
  DataProductsOperations,
} from "./classic/dataProducts/index.js";
import {
  getDataTypesOperations,
  DataTypesOperations,
} from "./classic/dataTypes/index.js";
import {
  getDataProductsCatalogsOperations,
  DataProductsCatalogsOperations,
} from "./classic/dataProductsCatalogs/index.js";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createNetworkAnalytics,
  NetworkAnalyticsContext,
  NetworkAnalyticsClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { NetworkAnalyticsClientOptionalParams } from "./api/networkAnalyticsContext.js";

export class NetworkAnalyticsClient {
  private _client: NetworkAnalyticsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    options: NetworkAnalyticsClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNetworkAnalytics(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.dataProducts = getDataProductsOperations(this._client);
    this.dataTypes = getDataTypesOperations(this._client);
    this.dataProductsCatalogs = getDataProductsCatalogsOperations(this._client);
    this.operations = getOperationsOperations(this._client);
  }

  /** The operation groups for dataProducts */
  public readonly dataProducts: DataProductsOperations;
  /** The operation groups for dataTypes */
  public readonly dataTypes: DataTypesOperations;
  /** The operation groups for dataProductsCatalogs */
  public readonly dataProductsCatalogs: DataProductsCatalogsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
