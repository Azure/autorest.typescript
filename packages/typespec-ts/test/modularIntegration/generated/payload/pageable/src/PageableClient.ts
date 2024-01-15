// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { User } from "./models/models.js";
import { ListOptions } from "./models/options.js";
import { PagedAsyncIterableIterator } from "./models/pagingTypes.js";
import {
  list,
  createPageable,
  PageableClientOptions,
  PageableContext,
} from "./api/index.js";

export { PageableClientOptions } from "./api/PageableContext.js";

export class PageableClient {
  private _client: PageableContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing pageable. */
  constructor(options: PageableClientOptions = {}) {
    this._client = createPageable(options);
    this.pipeline = this._client.pipeline;
  }

  /** List users */
  list(
    options: ListOptions = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return list(this._client, options);
  }
}
