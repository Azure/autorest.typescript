// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  RenamedTwoOptions,
  RenamedFourOptions,
  RenamedSixOptions,
} from "./models/options.js";
import {
  createB,
  ServiceContext,
  renamedTwo,
  renamedFour,
  renamedSix,
} from "./api/index.js";

export { BClientOptions } from "./api/BContext.js";

export class BClient {
  private _client: ServiceContext;

  constructor(client: enum, options: BClientClientOptions = {}) {
    this._client = createB(client, options);
  }

  renamedTwo(
    options: RenamedTwoOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedTwo(this._client, options);
  }

  renamedFour(
    options: RenamedFourOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedFour(this._client, options);
  }

  renamedSix(
    options: RenamedSixOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedSix(this._client, options);
  }
}
