// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  RenamedTwoOptions,
  RenamedFourOptions,
  RenamedSixOptions,
  RenamedOneOptions,
  RenamedThreeOptions,
  RenamedFiveOptions,
} from "./models/options.js";
import {
  renamedTwo,
  renamedFour,
  renamedSix,
  renamedOne,
  renamedThree,
  renamedFive,
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
    options: RenamedOperationClientOptions = {}
  ) {
    this._client = createRenamedOperation(endpoint, client, options);
    this.pipeline = this._client.pipeline;
  }

  group = {
    renamedTwo: (options?: RenamedTwoOptions): Promise<void> => {
      return renamedTwo(this._client, options);
    },
    renamedFour: (options?: RenamedFourOptions): Promise<void> => {
      return renamedFour(this._client, options);
    },
    renamedSix: (options?: RenamedSixOptions): Promise<void> => {
      return renamedSix(this._client, options);
    },
  };

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
