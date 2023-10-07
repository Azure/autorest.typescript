// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BodyParameter } from "./models/models.js";
import {
  ModelSpreadAsRequestBodyOptions,
  AliasSpreadAsRequestBodyOptions,
  AliasSpreadAsRequestParameterOptions,
  AliasSpreadWithMultipleParametersOptions,
} from "./models/options.js";
import {
  aliasSpreadAsRequestBody,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
  modelSpreadAsRequestBody,
  createSpread,
  SpreadClientOptions,
  SpreadContext,
} from "./api/index.js";

export { SpreadClientOptions } from "./api/SpreadContext.js";

export class SpreadClient {
  private _client: SpreadContext;

  /** Test for the spread operator. */
  constructor(options: SpreadClientOptions = {}) {
    this._client = createSpread(options);
  }

  model = {
    spreadAsRequestBody: (
      body: BodyParameter,
      options?: ModelSpreadAsRequestBodyOptions
    ): Promise<void> => {
      return modelSpreadAsRequestBody(this._client, body, options);
    },
  };
  alias = {
    spreadAsRequestBody: (
      name: string,
      options?: AliasSpreadAsRequestBodyOptions
    ): Promise<void> => {
      return aliasSpreadAsRequestBody(this._client, name, options);
    },
    spreadAsRequestParameter: (
      id: string,
      xMsTestHeader: string,
      name: string,
      options?: AliasSpreadAsRequestParameterOptions
    ): Promise<void> => {
      return aliasSpreadAsRequestParameter(
        this._client,
        id,
        xMsTestHeader,
        name,
        options
      );
    },
    spreadWithMultipleParameters: (
      id: string,
      xMsTestHeader: string,
      prop1: string,
      prop2: string,
      prop3: string,
      prop4: string,
      prop5: string,
      prop6: string,
      options?: AliasSpreadWithMultipleParametersOptions
    ): Promise<void> => {
      return aliasSpreadWithMultipleParameters(
        this._client,
        id,
        xMsTestHeader,
        prop1,
        prop2,
        prop3,
        prop4,
        prop5,
        prop6,
        options
      );
    },
  };
}
