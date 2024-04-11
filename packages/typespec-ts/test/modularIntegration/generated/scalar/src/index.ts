// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { ScalarClient, ScalarClientOptions } from "./scalarClient.js";
export {
  StringGetOptionalParams,
  StringPutOptionalParams,
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
  UnknownGetOptionalParams,
  UnknownPutOptionalParams,
  DecimalTypeResponseBodyOptionalParams,
  DecimalTypeRequestBodyOptionalParams,
  DecimalTypeRequestParameterOptionalParams,
  Decimal128TypeResponseBodyOptionalParams,
  Decimal128TypeRequestBodyOptionalParams,
  Decimal128TypeRequestParameterOptionalParams,
  DecimalVerifyPrepareVerifyOptionalParams,
  DecimalVerifyVerifyOptionalParams,
  Decimal128VerifyPrepareVerifyOptionalParams,
  Decimal128VerifyVerifyOptionalParams,
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
