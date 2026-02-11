// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createFooOperations,
  FooOperationsContext,
  FooOperationsOptionalParams,
} from "./api/index.js";
import { getAvatarAsJpeg, getAvatarAsPng } from "./api/operations.js";
import { GetAvatarAsJpegOptionalParams, GetAvatarAsPngOptionalParams } from "./api/options.js";
import { KeyCredential, TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { FooOperationsOptionalParams } from "./api/fooOperationsContext.js";

export class FooOperations {
  private _client: FooOperationsContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential | TokenCredential,
    options: FooOperationsOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createFooOperations(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  /** A remote procedure call (RPC) operation. */
  getAvatarAsJpeg(
    image: Uint8Array,
    options: GetAvatarAsJpegOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getAvatarAsJpeg(this._client, image, options);
  }

  /** A remote procedure call (RPC) operation. */
  getAvatarAsPng(
    image: Uint8Array,
    options: GetAvatarAsPngOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return getAvatarAsPng(this._client, image, options);
  }
}
