// Licensed under the MIT license.

import { Pipeline } from "@typespec/ts-http-runtime";
import {
  InputRecord,
  OutputRecord,
  InputOutputRecord,
} from "./models/models.js";
import {
  InputOptions,
  OutputOptions,
  InputAndOutputOptions,
} from "./models/options.js";
import {
  input,
  output,
  inputAndOutput,
  createUsage,
  UsageClientOptions,
  UsageContext,
} from "./api/index.js";

export { UsageClientOptions } from "./api/UsageContext.js";

export class UsageClient {
  private _client: UsageContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates usage of Record in different places(Operation parameters, return type or both). */
  constructor(options: UsageClientOptions = {}) {
    this._client = createUsage(options);
    this.pipeline = this._client.pipeline;
  }

  input(
    inputParameter: InputRecord,
    options: InputOptions = { requestOptions: {} },
  ): Promise<void> {
    return input(this._client, inputParameter, options);
  }

  output(
    options: OutputOptions = { requestOptions: {} },
  ): Promise<OutputRecord> {
    return output(this._client, options);
  }

  inputAndOutput(
    body: InputOutputRecord,
    options: InputAndOutputOptions = { requestOptions: {} },
  ): Promise<InputOutputRecord> {
    return inputAndOutput(this._client, body, options);
  }
}
