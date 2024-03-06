// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { BodyModel } from "./models/models.js";
import {
  RequiredExplicitOptions,
  RequiredImplicitOptions,
  SetOptions,
  OmitOptions,
} from "./models/options.js";
import {
  createBodyOptionality,
  BodyOptionalityClientOptions,
  BodyOptionalityContext,
  requiredExplicit,
  requiredImplicit,
  set,
  omit,
} from "./api/index.js";

export { BodyOptionalityClientOptions } from "./api/BodyOptionalityContext.js";

export class BodyOptionalityClient {
  private _client: BodyOptionalityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test describing optionality of the request body. */
  constructor(options: BodyOptionalityClientOptions = {}) {
    this._client = createBodyOptionality(options);
    this.pipeline = this._client.pipeline;
  }

  requiredExplicit(
    body: BodyModel,
    options: RequiredExplicitOptions = { requestOptions: {} },
  ): Promise<void> {
    return requiredExplicit(this._client, body, options);
  }

  requiredImplicit(
    body: BodyModel,
    options: RequiredImplicitOptions = { requestOptions: {} },
  ): Promise<void> {
    return requiredImplicit(this._client, body, options);
  }

  set(
    body: BodyModel,
    options: SetOptions = { requestOptions: {} },
  ): Promise<void> {
    return set(this._client, body, options);
  }

  omit(
    body: BodyModel,
    options: OmitOptions = { requestOptions: {} },
  ): Promise<void> {
    return omit(this._client, body, options);
  }
}
