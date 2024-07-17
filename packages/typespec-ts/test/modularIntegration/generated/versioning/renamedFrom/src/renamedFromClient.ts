// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { NewModel, Versions } from "./models/models.js";
import {
  newOp,
  newOpInNewInterface,
  NewOpOptionalParams,
  NewOpInNewInterfaceOptionalParams,
  createRenamedFrom,
  RenamedFromClientOptionalParams,
  RenamedFromContext,
} from "./api/index.js";

export class RenamedFromClient {
  private _client: RenamedFromContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the `@renamedFrom` decorator. */
  constructor(
    endpointParam: string,
    version: Versions,
    options: RenamedFromClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createRenamedFrom(endpointParam, version, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  newOp(
    newQuery: string,
    body: NewModel,
    options: NewOpOptionalParams = { requestOptions: {} },
  ): Promise<NewModel> {
    return newOp(this._client, newQuery, body, options);
  }

  newOpInNewInterface(
    body: NewModel,
    options: NewOpInNewInterfaceOptionalParams = { requestOptions: {} },
  ): Promise<NewModel> {
    return newOpInNewInterface(this._client, body, options);
  }
}
