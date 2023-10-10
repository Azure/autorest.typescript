// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  myOp,
  createSingle,
  SingleClientOptions,
  SingleContext,
} from "./api/index.js";
import { MyOpOptions } from "./models/options.js";

export { SingleClientOptions } from "./api/SingleContext.js";

export class SingleClient {
  private _client: SingleContext;

  /** Illustrates server with a single path parameter @server */
  constructor(endpoint: string, options: SingleClientOptions = {}) {
    this._client = createSingle(endpoint, options);
  }

  myOp(options: MyOpOptions = { requestOptions: {} }): Promise<void> {
    return myOp(this._client, options);
  }
}
