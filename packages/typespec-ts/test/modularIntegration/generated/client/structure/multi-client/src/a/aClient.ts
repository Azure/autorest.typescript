// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./models/models.js";
import {
  RenamedOneOptionalParams,
  RenamedThreeOptionalParams,
  RenamedFiveOptionalParams,
} from "./models/options.js";
import {
  createA,
  AClientOptions,
  ServiceContext,
  renamedOne,
  renamedThree,
  renamedFive,
} from "./api/index.js";

export { AClientOptions } from "./api/aContext.js";

export class AClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    clientParam: ClientType,
    options: AClientOptions = {},
  ) {
    this._client = createA(endpointParam, clientParam, {
      userAgentOptions: {
        userAgentPrefix:
          options?.userAgentOptions?.userAgentPrefix ??
          "azsdk-js-client-structure-multiclient-classic/1.0.0",
      },
      ...options,
    });
    this.pipeline = this._client.pipeline;
  }

  renamedOne(
    options: RenamedOneOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedOne(this._client, options);
  }

  renamedThree(
    options: RenamedThreeOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedThree(this._client, options);
  }

  renamedFive(
    options: RenamedFiveOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedFive(this._client, options);
  }
}
