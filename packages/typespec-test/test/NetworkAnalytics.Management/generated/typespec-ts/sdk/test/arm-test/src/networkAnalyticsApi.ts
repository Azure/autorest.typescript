// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Operations, OperationsOptionalParams } from "./operations/operations.js";
import {
  DataProductsCatalogs,
  DataProductsCatalogsOptionalParams,
} from "./dataProductsCatalogs/dataProductsCatalogs.js";
import { DataTypes, DataTypesOptionalParams } from "./dataTypes/dataTypes.js";
import { DataProducts, DataProductsOptionalParams } from "./dataProducts/dataProducts.js";
import {
  createNetworkAnalyticsApi,
  NetworkAnalyticsApiContext,
  NetworkAnalyticsApiOptionalParams,
} from "./api/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { NetworkAnalyticsApiOptionalParams } from "./api/networkAnalyticsApiContext.js";

export class NetworkAnalyticsApi {
  private _client: NetworkAnalyticsApiContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: {
    credential: TokenCredential;
    subscriptionId: string;
    options: NetworkAnalyticsApiOptionalParams;
  };

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
    this._clientParams = { credential, subscriptionId, options };
  }

  getOperations(options: OperationsOptionalParams = {}): Operations {
    return new Operations(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  /** Operations on data catalog resource. */
  getDataProductsCatalogs(options: DataProductsCatalogsOptionalParams = {}): DataProductsCatalogs {
    return new DataProductsCatalogs(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  /** Operations on data type resource. */
  getDataTypes(options: DataTypesOptionalParams = {}): DataTypes {
    return new DataTypes(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }

  /** Operations on data product resource. */
  getDataProducts(options: DataProductsOptionalParams = {}): DataProducts {
    return new DataProducts(
      this._clientParams.credential,
      this._clientParams.subscriptionId,

      { ...this._clientParams.options, ...options },
    );
  }
}
