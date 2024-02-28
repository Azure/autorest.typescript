// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { ScalarClient, ScalarClientOptions } from "./ScalarClient.js";
export {
  StringGetOptions,
  StringPutOptions,
  BooleanGetOptions,
  BooleanPutOptions,
  UnknownGetOptions,
  UnknownPutOptions,
  DecimalTypeResponseBodyOptions,
  DecimalTypeRequestBodyOptions,
  DecimalTypeRequestParameterOptions,
  Decimal128TypeResponseBodyOptions,
  Decimal128TypeRequestBodyOptions,
  Decimal128TypeRequestParameterOptions,
  DecimalVerifyPrepareVerifyOptions,
  DecimalVerifyVerifyOptions,
  Decimal128VerifyPrepareVerifyOptions,
  Decimal128VerifyVerifyOptions,
} from "./models/index.js";
export {
  BooleanOperations,
  Decimal128TypeOperations,
  Decimal128VerifyOperations,
  DecimalTypeOperations,
  DecimalVerifyOperations,
  StringOperations,
  UnknownOperations,
} from "./classic/index.js";
