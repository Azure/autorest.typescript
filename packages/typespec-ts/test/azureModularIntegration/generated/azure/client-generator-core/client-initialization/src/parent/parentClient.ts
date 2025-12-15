// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChildClient, ChildClientOptionalParams } from "./child/childClient.js";
import {
  createParent,
  ParentContext,
  ParentClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ParentClientOptionalParams } from "./api/parentContext.js";

export class ParentClient {
  private _client: ParentContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;
  /** The parent client parameters that are used in the constructors. */
  private _clientParams: { options: ParentClientOptionalParams };

  constructor(options: ParentClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createParent({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this._clientParams = { options };
  }

  getChildClient(
    blobName: string,
    options: ChildClientOptionalParams = {},
  ): ChildClient {
    return new ChildClient(blobName, {
      ...this._clientParams.options,
      ...options,
    });
  }
}
