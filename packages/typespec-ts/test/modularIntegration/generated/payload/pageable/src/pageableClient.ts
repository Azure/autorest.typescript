// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { User } from "./models/models.js";
import {
  list,
  ListOptionalParams,
  createPageable,
  PageableClientOptionalParams,
  PageableContext,
} from "./api/index.js";
import { PagedAsyncIterableIterator } from "@azure/core-paging";

export class PageableClient {
  private _client: PageableContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing pageable. */
  constructor(options: PageableClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createPageable({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List users */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<User> {
    return list(this._client, options);
  }
}
