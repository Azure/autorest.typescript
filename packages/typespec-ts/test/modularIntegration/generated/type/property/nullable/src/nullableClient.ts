// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import { getBytesOperations, BytesOperations } from "./classic/bytes/index.js";
import {
  getDatetimeOperations,
  DatetimeOperations,
} from "./classic/datetime/index.js";
import {
  getDurationOperations,
  DurationOperations,
} from "./classic/duration/index.js";
import {
  getCollectionsByteOperations,
  CollectionsByteOperations,
} from "./classic/collectionsByte/index.js";
import {
  getCollectionsModelOperations,
  CollectionsModelOperations,
} from "./classic/collectionsModel/index.js";
import {
  getCollectionsStringOperations,
  CollectionsStringOperations,
} from "./classic/collectionsString/index.js";
import {
  createNullable,
  NullableClientOptions,
  NullableContext,
} from "./api/index.js";

export class NullableClient {
  private _client: NullableContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates models with nullable properties. */
  constructor(options: NullableClientOptions = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createNullable({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
    this.bytes = getBytesOperations(this._client);
    this.datetime = getDatetimeOperations(this._client);
    this.duration = getDurationOperations(this._client);
    this.collectionsByte = getCollectionsByteOperations(this._client);
    this.collectionsModel = getCollectionsModelOperations(this._client);
    this.collectionsString = getCollectionsStringOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
  /** The operation groups for Bytes */
  public readonly bytes: BytesOperations;
  /** The operation groups for Datetime */
  public readonly datetime: DatetimeOperations;
  /** The operation groups for Duration */
  public readonly duration: DurationOperations;
  /** The operation groups for CollectionsByte */
  public readonly collectionsByte: CollectionsByteOperations;
  /** The operation groups for CollectionsModel */
  public readonly collectionsModel: CollectionsModelOperations;
  /** The operation groups for CollectionsString */
  public readonly collectionsString: CollectionsStringOperations;
}
