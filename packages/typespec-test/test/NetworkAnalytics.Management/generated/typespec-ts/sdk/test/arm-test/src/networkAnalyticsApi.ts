// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  _getDataProductsOperations,
  DataProductsOperations,
} from "./classic/dataProducts/index.js";
import {
  _getDataTypesOperations,
  DataTypesOperations,
} from "./classic/dataTypes/index.js";
import {
  _getDataProductsCatalogsOperations,
  DataProductsCatalogsOperations,
} from "./classic/dataProductsCatalogs/index.js";
import {
  _getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  createNetworkAnalyticsApi,
  NetworkAnalyticsApiContext,
  NetworkAnalyticsApiOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { NetworkAnalyticsApiOptionalParams } from "./api/networkAnalyticsApiContext.js";

export class NetworkAnalyticsApi {
  private _client: NetworkAnalyticsApiContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: NetworkAnalyticsApiOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNetworkAnalyticsApi(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.dataProducts = _getDataProductsOperations(this._client);
    this.dataTypes = _getDataTypesOperations(this._client);
    this.dataProductsCatalogs = _getDataProductsCatalogsOperations(
      this._client,
    );
    this.operations = _getOperationsOperations(this._client);
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
