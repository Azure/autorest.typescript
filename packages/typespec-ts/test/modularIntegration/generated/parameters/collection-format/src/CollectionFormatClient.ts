// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  createCollectionFormat,
  CollectionFormatClientOptions,
  CollectionFormatContext,
  multi,
  ssv,
  tsv,
  pipes,
  csv,
} from "./api/index.js";
import {
  MultiOptions,
  SsvOptions,
  TsvOptions,
  PipesOptions,
  CsvOptions,
} from "./models/options.js";

export { CollectionFormatClientOptions } from "./api/CollectionFormatContext.js";

export class CollectionFormatClient {
  private _client: CollectionFormatContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Test for collectionFormat. */
  constructor(options: CollectionFormatClientOptions = {}) {
    this._client = createCollectionFormat(options);
    this.pipeline = this._client.pipeline;
  }

  multi(
    colors: string[],
    options: MultiOptions = { requestOptions: {} },
  ): Promise<void> {
    return multi(this._client, colors, options);
  }

  ssv(
    colors: string[],
    options: SsvOptions = { requestOptions: {} },
  ): Promise<void> {
    return ssv(this._client, colors, options);
  }

  tsv(
    colors: string[],
    options: TsvOptions = { requestOptions: {} },
  ): Promise<void> {
    return tsv(this._client, colors, options);
  }

  pipes(
    colors: string[],
    options: PipesOptions = { requestOptions: {} },
  ): Promise<void> {
    return pipes(this._client, colors, options);
  }

  csv(
    colors: string[],
    options: CsvOptions = { requestOptions: {} },
  ): Promise<void> {
    return csv(this._client, colors, options);
  }

  csv(
    colors: string[],
    options: CsvOptions = { requestOptions: {} },
  ): Promise<void> {
    return csv(this._client, colors, options);
  }
}
