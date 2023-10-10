// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  NoOperationParamsOptions,
  WithOperationPathParamOptions,
} from "./models/options.js";
import {
  createMultiple,
  MultipleClientOptions,
  MultipleContext,
  noOperationParams,
  withOperationPathParam,
} from "./api/index.js";

export { MultipleClientOptions } from "./api/MultipleContext.js";

export class MultipleClient {
  private _client: MultipleContext;

  constructor(endpoint: string, options: MultipleClientOptions = {}) {
    this._client = createMultiple(endpoint, options);
  }

  noOperationParams(
    options: NoOperationParamsOptions = { requestOptions: {} }
  ): Promise<void> {
    return noOperationParams(this._client, options);
  }

  withOperationPathParam(
    keyword: string,
    options: WithOperationPathParamOptions = { requestOptions: {} }
  ): Promise<void> {
    return withOperationPathParam(this._client, keyword, options);
  }
}
