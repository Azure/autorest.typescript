// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getAvatarAsPng,
  getAvatarAsJpeg,
  createWidgetManager,
  WidgetManagerClientOptions,
  WidgetManagerContext,
} from "./api/index.js";
import {
  GetAvatarAsPngOptions,
  GetAvatarAsJpegOptions,
} from "./models/options.js";

export { WidgetManagerClientOptions } from "./api/WidgetManagerContext.js";

export class WidgetManagerClient {
  private _client: WidgetManagerContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpoint: string,
    credential: KeyCredential | TokenCredential,
    options: WidgetManagerClientOptions = {}
  ) {
    this._client = createWidgetManager(endpoint, credential, options);
    this.pipeline = this._client.pipeline;
  }

  /** A remote procedure call (RPC) operation. */
  getAvatarAsPng(
    image: Uint8Array,
    options: GetAvatarAsPngOptions = { requestOptions: {} }
  ): Promise<void> {
    return getAvatarAsPng(this._client, image, options);
  }

  /** A remote procedure call (RPC) operation. */
  getAvatarAsJpeg(
    image: Uint8Array,
    options: GetAvatarAsJpegOptions = { requestOptions: {} }
  ): Promise<void> {
    return getAvatarAsJpeg(this._client, image, options);
  }
}
