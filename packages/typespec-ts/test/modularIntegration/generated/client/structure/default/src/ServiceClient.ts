// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  OneOptions,
  TwoOptions,
  ThreeOptions,
  FourOptions,
  FiveOptions,
  SixOptions,
} from "./models/options.js";
import {
  one,
  two,
  three,
  four,
  five,
  six,
  createService,
  ServiceClientOptions,
  ServiceContext,
} from "./api/index.js";

export { ServiceClientOptions } from "./api/ServiceContext.js";

export class ServiceClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /**
   * Test that we can use @client and @operationGroup decorators to customize client side code structure, such as:
   * 1. have everything as default.
   * 2. to rename client or operation group
   * 3. one client can have more than one operations groups
   * 4. split one interface into two clients
   * 5. have two clients with operations come from different interfaces
   * 6. have two clients with a hierarchy relation.
   */
  constructor(
    endpoint: string,
    client: ClientType,
    options: ServiceClientOptions = {}
  ) {
    this._client = createService(endpoint, client, options);
    this.pipeline = this._client.pipeline;
  }

  one(options: OneOptions = { requestOptions: {} }): Promise<void> {
    return one(this._client, options);
  }

  two(options: TwoOptions = { requestOptions: {} }): Promise<void> {
    return two(this._client, options);
  }

  three(options: ThreeOptions = { requestOptions: {} }): Promise<void> {
    return three(this._client, options);
  }

  four(options: FourOptions = { requestOptions: {} }): Promise<void> {
    return four(this._client, options);
  }

  five(options: FiveOptions = { requestOptions: {} }): Promise<void> {
    return five(this._client, options);
  }

  six(options: SixOptions = { requestOptions: {} }): Promise<void> {
    return six(this._client, options);
  }
}
