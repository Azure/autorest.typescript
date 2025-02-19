// Licensed under the MIT License.

import {
  _getServerDrivenPaginationOperations,
  ServerDrivenPaginationOperations,
} from "./classic/serverDrivenPagination/index.js";
import {
  createPageable,
  PageableContext,
  PageableClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { PageableClientOptionalParams } from "./api/pageableContext.js";

export class PageableClient {
  private _client: PageableContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for pageable payload. */
  constructor(options: PageableClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createPageable({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.serverDrivenPagination = _getServerDrivenPaginationOperations(
      this._client,
    );
  }

  /** The operation groups for serverDrivenPagination */
  public readonly serverDrivenPagination: ServerDrivenPaginationOperations;
}
