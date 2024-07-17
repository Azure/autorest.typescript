// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { ClientType } from "./../models/models.js";
import {
  createA,
  AClientOptionalParams,
  ServiceContext,
  renamedOne,
  renamedThree,
  renamedFive,
  RenamedOneOptionalParams,
  RenamedThreeOptionalParams,
  RenamedFiveOptionalParams,
} from "./api/index.js";

export class AClient {
  private _client: ServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    clientParam: ClientType,
    options: AClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createA(endpointParam, clientParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
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
