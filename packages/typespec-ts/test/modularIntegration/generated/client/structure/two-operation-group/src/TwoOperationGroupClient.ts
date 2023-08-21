// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientType } from "./models/models.js";
import {
  Group1OneOptions,
  Group1ThreeOptions,
  Group1FourOptions,
  Group2TwoOptions,
  Group2FiveOptions,
  Group2SixOptions,
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

  constructor(
    client: ClientType,
    options: TwoOperationGroupClientOptions = {}
  ) {
    this._client = createTwoOperationGroup(client, options);
  }

  group1 = {
    one: (options?: Group1OneOptions): Promise<void> => {
      return one(this._client, options);
    },
    three: (options?: Group1ThreeOptions): Promise<void> => {
      return three(this._client, options);
    },
    four: (options?: Group1FourOptions): Promise<void> => {
      return four(this._client, options);
    },
  };
  group2 = {
    two: (options?: Group2TwoOptions): Promise<void> => {
      return two(this._client, options);
    },
    five: (options?: Group2FiveOptions): Promise<void> => {
      return five(this._client, options);
    },
    six: (options?: Group2SixOptions): Promise<void> => {
      return six(this._client, options);
    },
  };
}
