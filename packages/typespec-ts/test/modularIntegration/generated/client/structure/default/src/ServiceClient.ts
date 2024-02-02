// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import { OneOptions, TwoOptions } from "./models/options.js";
import { getBazOperations, BazOperations } from "./classic/baz/index.js";
import { getQuxOperations, QuxOperations } from "./classic/qux/index.js";
import { getFooOperations, FooOperations } from "./classic/foo/index.js";
import { getBarOperations, BarOperations } from "./classic/bar/index.js";
import {
  one,
  two,
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
    options: ServiceClientOptions = {},
  ) {
    this._client = createService(endpoint, client, options);
    this.pipeline = this._client.pipeline;
    this.baz = getBazOperations(this._client);
    this.qux = getQuxOperations(this._client);
    this.foo = getFooOperations(this._client);
    this.bar = getBarOperations(this._client);
  }

  one(options: OneOptions = { requestOptions: {} }): Promise<void> {
    return one(this._client, options);
  }

  two(options: TwoOptions = { requestOptions: {} }): Promise<void> {
    return two(this._client, options);
  }

  /** The operation groups for BazFoo */
  public readonly baz: BazOperations;
  /** The operation groups for Qux */
  public readonly qux: QuxOperations;
  /** The operation groups for Foo */
  public readonly foo: FooOperations;
  /** The operation groups for Bar */
  public readonly bar: BarOperations;
}
