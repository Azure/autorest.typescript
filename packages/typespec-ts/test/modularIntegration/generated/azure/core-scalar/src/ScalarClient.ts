// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { AzureLocationModel } from "./models/models.js";
import {
  GetOptionalParams,
  PutOptionalParams,
  PostOptionalParams,
  HeaderOptionalParams,
  QueryOptionalParams,
} from "./models/options.js";
import {
  get,
  put,
  post,
  header,
  query,
  createScalar,
  ScalarClientOptions,
  ScalarContext,
} from "./api/index.js";

export { ScalarClientOptions } from "./api/ScalarContext.js";

export class ScalarClient {
  private _client: ScalarContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ScalarClientOptions = {}) {
    this._client = createScalar(options);
    this.pipeline = this._client.pipeline;
  }

  /** get azureLocation value */
  get(options: GetOptionalParams = { requestOptions: {} }): Promise<string> {
    return get(this._client, options);
  }

  /** put azureLocation value */
  put(
    body: string,
    options: PutOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return put(this._client, body, options);
  }

  /** post a model which has azureLocation property */
  post(
    body: AzureLocationModel,
    options: PostOptionalParams = { requestOptions: {} },
  ): Promise<AzureLocationModel> {
    return post(this._client, body, options);
  }

  /** azureLocation value header */
  header(
    region: string,
    options: HeaderOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return header(this._client, region, options);
  }

  /** azureLocation value query */
  query(
    region: string,
    options: QueryOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return query(this._client, region, options);
  }
}
