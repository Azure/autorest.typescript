// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { CreateFileRequest, OpenAIFile } from "./models/models.js";
import { CreateFileOptions } from "./models/options.js";
import {
  createDemoService,
  DemoServiceClientOptions,
  DemoServiceContext,
  createFile,
} from "./api/index.js";

export { DemoServiceClientOptions } from "./api/DemoServiceContext.js";

export class DemoServiceClient {
  private _client: DemoServiceContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(endpoint: string, options: DemoServiceClientOptions = {}) {
    this._client = createDemoService(endpoint, options);
    this.pipeline = this._client.pipeline;
  }

  createFile(
    file: CreateFileRequest,
    options: CreateFileOptions = { requestOptions: {} }
  ): Promise<OpenAIFile> {
    return createFile(this._client, file, options);
  }
}
