// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

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
} from "./options.js";
export {
  createScalar,
  ScalarClientOptionalParams,
  ScalarContext,
} from "./scalarContext.js";
export { booleanGet, booleanPut } from "./boolean/index.js";
export {
  decimal128TypeResponseBody,
  decimal128TypeRequestBody,
  decimal128TypeRequestParameter,
} from "./decimal128Type/index.js";
export {
  decimal128VerifyPrepareVerify,
  decimal128VerifyVerify,
} from "./decimal128Verify/index.js";
export {
  decimalTypeResponseBody,
  decimalTypeRequestBody,
  decimalTypeRequestParameter,
} from "./decimalType/index.js";
export {
  decimalVerifyPrepareVerify,
  decimalVerifyVerify,
} from "./decimalVerify/index.js";
export { stringGet, stringPut } from "./string/index.js";
export { unknownGet, unknownPut } from "./unknown/index.js";
