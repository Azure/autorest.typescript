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
  getPlainDateOperations,
  PlainDateOperations,
} from "./classic/plainDate/index.js";
import {
  getPlainTimeOperations,
  PlainTimeOperations,
} from "./classic/plainTime/index.js";
import {
  getCollectionsByteOperations,
  CollectionsByteOperations,
} from "./classic/collectionsByte/index.js";
import {
  getCollectionsModelOperations,
  CollectionsModelOperations,
} from "./classic/collectionsModel/index.js";
import {
  getStringLiteralOperations,
  StringLiteralOperations,
} from "./classic/stringLiteral/index.js";
import {
  getIntLiteralOperations,
  IntLiteralOperations,
} from "./classic/intLiteral/index.js";
import {
  getFloatLiteralOperations,
  FloatLiteralOperations,
} from "./classic/floatLiteral/index.js";
import {
  getBooleanLiteralOperations,
  BooleanLiteralOperations,
} from "./classic/booleanLiteral/index.js";
import {
  getUnionStringLiteralOperations,
  UnionStringLiteralOperations,
} from "./classic/unionStringLiteral/index.js";
import {
  getUnionIntLiteralOperations,
  UnionIntLiteralOperations,
} from "./classic/unionIntLiteral/index.js";
import {
  getUnionFloatLiteralOperations,
  UnionFloatLiteralOperations,
} from "./classic/unionFloatLiteral/index.js";
import {
  getRequiredAndOptionalOperations,
  RequiredAndOptionalOperations,
} from "./classic/requiredAndOptional/index.js";
import {
  createOptional,
  OptionalClientOptionalParams,
  OptionalContext,
} from "./api/index.js";

export { OptionalClientOptionalParams } from "./api/optionalContext.js";

export class OptionalClient {
  private _client: OptionalContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates models with optional properties. */
  constructor(options: OptionalClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createOptional({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
    this.bytes = getBytesOperations(this._client);
    this.datetime = getDatetimeOperations(this._client);
    this.duration = getDurationOperations(this._client);
    this.plainDate = getPlainDateOperations(this._client);
    this.plainTime = getPlainTimeOperations(this._client);
    this.collectionsByte = getCollectionsByteOperations(this._client);
    this.collectionsModel = getCollectionsModelOperations(this._client);
    this.stringLiteral = getStringLiteralOperations(this._client);
    this.intLiteral = getIntLiteralOperations(this._client);
    this.floatLiteral = getFloatLiteralOperations(this._client);
    this.booleanLiteral = getBooleanLiteralOperations(this._client);
    this.unionStringLiteral = getUnionStringLiteralOperations(this._client);
    this.unionIntLiteral = getUnionIntLiteralOperations(this._client);
    this.unionFloatLiteral = getUnionFloatLiteralOperations(this._client);
    this.requiredAndOptional = getRequiredAndOptionalOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
  /** The operation groups for Bytes */
  public readonly bytes: BytesOperations;
  /** The operation groups for Datetime */
  public readonly datetime: DatetimeOperations;
  /** The operation groups for Duration */
  public readonly duration: DurationOperations;
  /** The operation groups for PlainDate */
  public readonly plainDate: PlainDateOperations;
  /** The operation groups for PlainTime */
  public readonly plainTime: PlainTimeOperations;
  /** The operation groups for CollectionsByte */
  public readonly collectionsByte: CollectionsByteOperations;
  /** The operation groups for CollectionsModel */
  public readonly collectionsModel: CollectionsModelOperations;
  /** The operation groups for StringLiteral */
  public readonly stringLiteral: StringLiteralOperations;
  /** The operation groups for IntLiteral */
  public readonly intLiteral: IntLiteralOperations;
  /** The operation groups for FloatLiteral */
  public readonly floatLiteral: FloatLiteralOperations;
  /** The operation groups for BooleanLiteral */
  public readonly booleanLiteral: BooleanLiteralOperations;
  /** The operation groups for UnionStringLiteral */
  public readonly unionStringLiteral: UnionStringLiteralOperations;
  /** The operation groups for UnionIntLiteral */
  public readonly unionIntLiteral: UnionIntLiteralOperations;
  /** The operation groups for UnionFloatLiteral */
  public readonly unionFloatLiteral: UnionFloatLiteralOperations;
  /** The operation groups for RequiredAndOptional */
  public readonly requiredAndOptional: RequiredAndOptionalOperations;
}
