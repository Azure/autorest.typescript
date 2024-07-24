// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  ValidOptionalParams,
  InvalidOptionalParams,
} from "./models/options.js";
import {
  createCustom,
  CustomClientOptionalParams,
  CustomContext,
  valid,
  invalid,
} from "./api/index.js";

export { CustomClientOptionalParams } from "./api/customContext.js";

export class CustomClient {
  private _client: CustomContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates clients generated with generic HTTP auth. */
  constructor(
    credential: KeyCredential,
    options: CustomClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createCustom(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** Check whether client is authenticated */
  valid(options: ValidOptionalParams = { requestOptions: {} }): Promise<void> {
    return valid(this._client, options);
  }

  /** Check whether client is authenticated. */
  invalid(
    options: InvalidOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return invalid(this._client, options);
  }
}
