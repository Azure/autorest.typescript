// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "./models/options.js";
import {
  createA,
  ServiceContext,
  renamedOne,
  renamedThree,
  renamedFive,
} from "./api/index.js";

export { AClientOptions } from "./api/AContext.js";

export class AClient {
  private _client: ServiceContext;

  constructor(client: enum, options: AClientClientOptions = {}) {
    this._client = createA(client, options);
  }

  renamedOne(
    options: RenamedOneOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptions = { requestOptions: {} }
  ): Promise<void> {
    return renamedFive(this._client, options);
  }
}
