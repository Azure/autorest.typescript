// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getStringOperations,
  StringOperations,
} from "./classic/string/index.js";
import {
  getBooleanOperations,
  BooleanOperations,
} from "./classic/boolean/index.js";
import {
  getUnknownOperations,
  UnknownOperations,
} from "./classic/unknown/index.js";
import {
  getDecimalTypeOperations,
  DecimalTypeOperations,
} from "./classic/decimalType/index.js";
import {
  getDecimal128TypeOperations,
  Decimal128TypeOperations,
} from "./classic/decimal128Type/index.js";
import {
  getDecimalVerifyOperations,
  DecimalVerifyOperations,
} from "./classic/decimalVerify/index.js";
import {
  getDecimal128VerifyOperations,
  Decimal128VerifyOperations,
} from "./classic/decimal128Verify/index.js";
import {
  createScalar,
  ScalarClientOptions,
  ScalarContext,
} from "./api/index.js";

export { ScalarClientOptions } from "./api/ScalarContext.js";

export class ScalarClient {
  private _client: ScalarContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: ScalarClientOptions = {}) {
    this._client = createScalar(options);
    this.pipeline = this._client.pipeline;
    this.string = getStringOperations(this._client);
    this.boolean = getBooleanOperations(this._client);
    this.unknown = getUnknownOperations(this._client);
    this.decimalType = getDecimalTypeOperations(this._client);
    this.decimal128Type = getDecimal128TypeOperations(this._client);
    this.decimalVerify = getDecimalVerifyOperations(this._client);
    this.decimal128Verify = getDecimal128VerifyOperations(this._client);
  }

  /** The operation groups for String */
  public readonly string: StringOperations;
  /** The operation groups for Boolean */
  public readonly boolean: BooleanOperations;
  /** The operation groups for Unknown */
  public readonly unknown: UnknownOperations;
  /** The operation groups for DecimalType */
  public readonly decimalType: DecimalTypeOperations;
  /** The operation groups for Decimal128Type */
  public readonly decimal128Type: Decimal128TypeOperations;
  /** The operation groups for DecimalVerify */
  public readonly decimalVerify: DecimalVerifyOperations;
  /** The operation groups for Decimal128Verify */
  public readonly decimal128Verify: Decimal128VerifyOperations;
}
