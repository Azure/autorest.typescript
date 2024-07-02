// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { BodyModel } from "./models/models.js";
import {
  RequiredExplicitOptionalParams,
  RequiredImplicitOptionalParams,
} from "./models/options.js";
import {
  getOptionalExplicitOperations,
  OptionalExplicitOperations,
} from "./classic/optionalExplicit/index.js";
import {
  createBodyOptionality,
  BodyOptionalityClientOptions,
  BodyOptionalityContext,
  requiredExplicit,
  requiredImplicit,
} from "./api/index.js";

export { BodyOptionalityClientOptions } from "./api/bodyOptionalityContext.js";

export class BodyOptionalityClient {
  private _client: BodyOptionalityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing optionality of the request body. */
  constructor(options: BodyOptionalityClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createBodyOptionality({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.optionalExplicit = getOptionalExplicitOperations(this._client);
  }

  requiredExplicit(
    body: BodyModel,
    options: RequiredExplicitOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return requiredExplicit(this._client, body, options);
  }

  requiredImplicit(
    body: BodyModel,
    options: RequiredImplicitOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return requiredImplicit(this._client, body, options);
  }

  /** The operation groups for OptionalExplicit */
  public readonly optionalExplicit: OptionalExplicitOperations;
}
