// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OutputRecord, InputOutputRecord } from "./models/models.js";
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

  /** Illustrates usage of Record in different places(Operation parameters, return type or both). */
  constructor(options: UsageClientOptions = {}) {
    this._client = createUsage(options);
  }

  input(
    requiredProp: string,
    options: InputOptions = { requestOptions: {} }
  ): Promise<void> {
    return input(this._client, requiredProp, options);
  }

  output(
    options: OutputOptions = { requestOptions: {} }
  ): Promise<OutputRecord> {
    return output(this._client, options);
  }

  inputAndOutput(
    requiredProp: string,
    options: InputAndOutputOptions = { requestOptions: {} }
  ): Promise<InputOutputRecord> {
    return inputAndOutput(this._client, requiredProp, options);
  }
}
