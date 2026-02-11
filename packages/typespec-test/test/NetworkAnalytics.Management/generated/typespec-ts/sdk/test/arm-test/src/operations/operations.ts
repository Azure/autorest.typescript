// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createOperations, OperationsContext, OperationsOptionalParams } from "./api/index.js";
import { Operation } from "../models/models.js";
import { PagedAsyncIterableIterator } from "../static-helpers/pagingHelpers.js";
import { list } from "./api/operations.js";
import { ListOptionalParams } from "./api/options.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { OperationsOptionalParams } from "./api/operationsContext.js";

export class Operations {
  private _client: OperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options: OperationsOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createOperations(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** List the operations for the provider */
  list(
    options: ListOptionalParams = { requestOptions: {} },
  ): PagedAsyncIterableIterator<Operation> {
    return list(this._client, options);
  }
}
