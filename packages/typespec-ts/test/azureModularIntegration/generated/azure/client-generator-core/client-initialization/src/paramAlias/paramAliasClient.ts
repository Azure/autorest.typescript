// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createParamAlias,
  ParamAliasContext,
  ParamAliasClientOptionalParams,
} from "./api/index.js";
import { withOriginalName, withAliasedName } from "./api/operations.js";
import { WithOriginalNameOptionalParams, WithAliasedNameOptionalParams } from "./api/options.js";
import { Pipeline } from "@azure/core-rest-pipeline";

export { ParamAliasClientOptionalParams } from "./api/paramAliasContext.js";

export class ParamAliasClient {
  private _client: ParamAliasContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(blobName: string, options: ParamAliasClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createParamAlias(blobName, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  withOriginalName(
    options: WithOriginalNameOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return withOriginalName(this._client, options);
  }

  withAliasedName(options: WithAliasedNameOptionalParams = { requestOptions: {} }): Promise<void> {
    return withAliasedName(this._client, options);
  }
}
