// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { BodyParameter } from "./models/models.js";
import {
  SpreadAsRequestBodyOptions,
  SpreadAsRequestParameterOptions,
  SpreadWithMultipleParametersOptions,
} from "./models/options.js";
import {
  spreadAsRequestBody,
  spreadAsRequestParameter,
  spreadWithMultipleParameters,
  createSpread,
  SpreadClientOptions,
  SpreadContext,
} from "./api/index.js";

export { SpreadClientOptions } from "./api/SpreadContext.js";

export class SpreadClient {
  private _client: SpreadContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for the spread operator. */
  constructor(options: SpreadClientOptions = {}) {
    this._client = createSpread(options);
    this.pipeline = this._client.pipeline;
  }

  spreadAsRequestBody(
    body: BodyParameter,
    options: SpreadAsRequestBodyOptions = { requestOptions: {} },
  ): Promise<void> {
    return spreadAsRequestBody(this._client, body, options);
  }

  spreadAsRequestBody(
    name: string,
    options: SpreadAsRequestBodyOptions = { requestOptions: {} },
  ): Promise<void> {
    return spreadAsRequestBody(this._client, name, options);
  }

  spreadAsRequestParameter(
    id: string,
    xMsTestHeader: string,
    name: string,
    options: SpreadAsRequestParameterOptions = { requestOptions: {} },
  ): Promise<void> {
    return spreadAsRequestParameter(
      this._client,
      id,
      xMsTestHeader,
      name,
      options,
    );
  }

  spreadWithMultipleParameters(
    id: string,
    xMsTestHeader: string,
    prop1: string,
    prop2: string,
    prop3: string,
    prop4: string,
    prop5: string,
    prop6: string,
    options: SpreadWithMultipleParametersOptions = { requestOptions: {} },
  ): Promise<void> {
    return spreadWithMultipleParameters(
      this._client,
      id,
      xMsTestHeader,
      prop1,
      prop2,
      prop3,
      prop4,
      prop5,
      prop6,
      options,
    );
  }
}
