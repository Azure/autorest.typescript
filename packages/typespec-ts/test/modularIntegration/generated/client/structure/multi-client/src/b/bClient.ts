// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./../models/models.js";
import {
  createB,
  BClientOptionalParams,
  ServiceContext,
  renamedTwo,
  renamedFour,
  renamedSix,
  RenamedTwoOptionalParams,
  RenamedFourOptionalParams,
  RenamedSixOptionalParams,
} from "./api/index.js";

export class BClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    clientParam: ClientType,
    options: BClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createB(endpointParam, clientParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  renamedTwo(
    options: RenamedTwoOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedTwo(this._client, options);
  }

  renamedFour(
    options: RenamedFourOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedFour(this._client, options);
  }

  renamedSix(
    options: RenamedSixOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return renamedSix(this._client, options);
  }
}
