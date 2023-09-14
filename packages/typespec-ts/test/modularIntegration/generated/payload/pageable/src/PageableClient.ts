// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { User } from "./models/models.js";
import { ListOptions } from "./models/options.js";
import {
  list,
  createPageable,
  PageableClientOptions,
  PageableContext,
} from "./api/index.js";
import { PagedAsyncIterableIterator } from "./util/pagingUtil.js";

export { PageableClientOptions } from "./api/PageableContext.js";

export class PageableClient {
  private _client: PageableContext;

  /** Test describing pageable. */
  constructor(options: PageableClientOptions = {}) {
    this._client = createPageable(options);
  }

  /** List users */
  list(
    options: ListOptions = { requestOptions: {} }
  ): PagedAsyncIterableIterator<User> {
    return list(this._client, options);
  }
}
