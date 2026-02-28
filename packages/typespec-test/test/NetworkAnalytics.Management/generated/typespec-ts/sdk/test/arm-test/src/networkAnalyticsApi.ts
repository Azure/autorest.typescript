// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  NetworkAnalyticsApiContext,
  NetworkAnalyticsApiOptionalParams,
  createNetworkAnalyticsApi,
} from "./api/index.js";
import {
  DataProductsOperations,
  _getDataProductsOperations,
} from "./classic/dataProducts/index.js";
import {
  DataProductsCatalogsOperations,
  _getDataProductsCatalogsOperations,
} from "./classic/dataProductsCatalogs/index.js";
import { DataTypesOperations, _getDataTypesOperations } from "./classic/dataTypes/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { NetworkAnalyticsApiOptionalParams } from "./api/networkAnalyticsApiContext.js";

export class NetworkAnalyticsApi {
  private _client: NetworkAnalyticsApiContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options?: NetworkAnalyticsApiOptionalParams);
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: NetworkAnalyticsApiOptionalParams,
  );
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | NetworkAnalyticsApiOptionalParams,
    options?: NetworkAnalyticsApiOptionalParams,
  ) {
    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    options = options ?? {};
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createNetworkAnalyticsApi(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.dataProducts = _getDataProductsOperations(this._client);
    this.dataTypes = _getDataTypesOperations(this._client);
    this.dataProductsCatalogs = _getDataProductsCatalogsOperations(this._client);
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
