// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
  RenamedTwoOptions,
  RenamedFourOptions,
  RenamedSixOptions,
} from "./models/options.js";
import {
  renamedOne,
  renamedThree,
  renamedFive,
  renamedTwo,
  renamedFour,
  renamedSix,
  createRenamedOperation,
  RenamedOperationClientOptions,
  ServiceContext,
} from "./api/index.js";

export { RenamedOperationClientOptions } from "./api/RenamedOperationContext.js";

export class RenamedOperationClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    client: ClientType,
    options: RenamedOperationClientOptions = {},
  ) {
    this._client = createRenamedOperation(endpoint, client, options);
    this.pipeline = this._client.pipeline;
  }

  renamedOne(
    options: RenamedOneOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedFive(this._client, options);
  }

  renamedTwo(
    options: RenamedTwoOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedTwo(this._client, options);
  }

  renamedFour(
    options: RenamedFourOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedFour(this._client, options);
  }

  renamedSix(
    options: RenamedSixOptions = { requestOptions: {} },
  ): Promise<void> {
    return renamedSix(this._client, options);
  }
}
