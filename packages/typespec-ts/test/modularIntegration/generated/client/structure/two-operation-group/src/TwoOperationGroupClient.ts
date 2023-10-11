// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  OneOptions,
  ThreeOptions,
  FourOptions,
  TwoOptions,
  FiveOptions,
  SixOptions,
} from "./models/options.js";
import {
  one,
  three,
  four,
  two,
  five,
  six,
  createTwoOperationGroup,
  TwoOperationGroupClientOptions,
  ServiceContext,
} from "./api/index.js";

export { TwoOperationGroupClientOptions } from "./api/TwoOperationGroupContext.js";

export class TwoOperationGroupClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: TwoOperationGroupClientOptions = {}
  ) {
    this._client = createTwoOperationGroup(endpoint, client, options);
    this.pipeline = this._client.pipeline;
  }

  group1 = {
    one: (options?: OneOptions): Promise<void> => {
      return one(this._client, options);
    },
    three: (options?: ThreeOptions): Promise<void> => {
      return three(this._client, options);
    },
    four: (options?: FourOptions): Promise<void> => {
      return four(this._client, options);
    },
  };
  group2 = {
    two: (options?: TwoOptions): Promise<void> => {
      return two(this._client, options);
    },
    five: (options?: FiveOptions): Promise<void> => {
      return five(this._client, options);
    },
    six: (options?: SixOptions): Promise<void> => {
      return six(this._client, options);
    },
  };
}
