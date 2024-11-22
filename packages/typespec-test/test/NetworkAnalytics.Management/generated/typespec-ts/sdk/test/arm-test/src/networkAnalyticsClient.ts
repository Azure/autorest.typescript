// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getDataProductsCatalogsOperations,
  DataProductsCatalogsOperations,
} from "./classic/dataProductsCatalogs/index.js";
import {
  getDataTypesOperations,
  DataTypesOperations,
} from "./classic/dataTypes/index.js";
import {
  getDataProductsOperations,
  DataProductsOperations,
} from "./classic/dataProducts/index.js";
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
    subscriptionId: string,
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
    this.operations = getOperationsOperations(this._client);
    this.dataProductsCatalogs = getDataProductsCatalogsOperations(
      this._client,
      subscriptionId,
    );
    this.dataTypes = getDataTypesOperations(this._client, subscriptionId);
    this.dataProducts = getDataProductsOperations(this._client, subscriptionId);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for DataProductsCatalogs */
  public readonly dataProductsCatalogs: DataProductsCatalogsOperations;
  /** The operation groups for DataTypes */
  public readonly dataTypes: DataTypesOperations;
  /** The operation groups for DataProducts */
  public readonly dataProducts: DataProductsOperations;
}
