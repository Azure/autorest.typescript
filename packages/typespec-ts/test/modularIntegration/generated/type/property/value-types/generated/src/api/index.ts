// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  BooleanGetOptionalParams,
  BooleanPutOptionalParams,
  StringGetOptionalParams,
  StringPutOptionalParams,
  BytesGetOptionalParams,
  BytesPutOptionalParams,
  IntGetOptionalParams,
  IntPutOptionalParams,
  FloatGetOptionalParams,
  FloatPutOptionalParams,
  DecimalGetOptionalParams,
  DecimalPutOptionalParams,
  Decimal128GetOptionalParams,
  Decimal128PutOptionalParams,
  DatetimeGetOptionalParams,
  DatetimePutOptionalParams,
  DurationGetOptionalParams,
  DurationPutOptionalParams,
  EnumGetOptionalParams,
  EnumPutOptionalParams,
  ExtensibleEnumGetOptionalParams,
  ExtensibleEnumPutOptionalParams,
  ModelGetOptionalParams,
  ModelPutOptionalParams,
  CollectionsStringGetOptionalParams,
  CollectionsStringPutOptionalParams,
  CollectionsIntGetOptionalParams,
  CollectionsIntPutOptionalParams,
  CollectionsModelGetOptionalParams,
  CollectionsModelPutOptionalParams,
  DictionaryStringGetOptionalParams,
  DictionaryStringPutOptionalParams,
  NeverGetOptionalParams,
  NeverPutOptionalParams,
  UnknownStringGetOptionalParams,
  UnknownStringPutOptionalParams,
  UnknownIntGetOptionalParams,
  UnknownIntPutOptionalParams,
  UnknownDictGetOptionalParams,
  UnknownDictPutOptionalParams,
  UnknownArrayGetOptionalParams,
  UnknownArrayPutOptionalParams,
  StringLiteralGetOptionalParams,
  StringLiteralPutOptionalParams,
  IntLiteralGetOptionalParams,
  IntLiteralPutOptionalParams,
  FloatLiteralGetOptionalParams,
  FloatLiteralPutOptionalParams,
  BooleanLiteralGetOptionalParams,
  BooleanLiteralPutOptionalParams,
  UnionStringLiteralGetOptionalParams,
  UnionStringLiteralPutOptionalParams,
  UnionIntLiteralGetOptionalParams,
  UnionIntLiteralPutOptionalParams,
  UnionFloatLiteralGetOptionalParams,
  UnionFloatLiteralPutOptionalParams,
  UnionEnumValueGetOptionalParams,
  UnionEnumValuePutOptionalParams,
} from "./options.js";
export {
  createValueTypes,
  ValueTypesClientOptions,
  ValueTypesContext,
} from "./valueTypesContext.js";
export { booleanGet, booleanPut } from "./boolean/index.js";
export {
  booleanLiteralGet,
  booleanLiteralPut,
} from "./booleanLiteral/index.js";
export { bytesGet, bytesPut } from "./bytes/index.js";
export {
  collectionsIntGet,
  collectionsIntPut,
} from "./collectionsInt/index.js";
export {
  collectionsModelGet,
  collectionsModelPut,
} from "./collectionsModel/index.js";
export {
  collectionsStringGet,
  collectionsStringPut,
} from "./collectionsString/index.js";
export { datetimeGet, datetimePut } from "./datetime/index.js";
export { decimalGet, decimalPut } from "./decimal/index.js";
export { decimal128Get, decimal128Put } from "./decimal128/index.js";
export {
  dictionaryStringGet,
  dictionaryStringPut,
} from "./dictionaryString/index.js";
export { durationGet, durationPut } from "./duration/index.js";
export { enumGet, enumPut } from "./enum/index.js";
export {
  extensibleEnumGet,
  extensibleEnumPut,
} from "./extensibleEnum/index.js";
export { floatGet, floatPut } from "./float/index.js";
export { floatLiteralGet, floatLiteralPut } from "./floatLiteral/index.js";
export { intGet, intPut } from "./int/index.js";
export { intLiteralGet, intLiteralPut } from "./intLiteral/index.js";
export { modelGet, modelPut } from "./model/index.js";
export { neverGet, neverPut } from "./never/index.js";
export { stringGet, stringPut } from "./string/index.js";
export { stringLiteralGet, stringLiteralPut } from "./stringLiteral/index.js";
export {
  unionEnumValueGet,
  unionEnumValuePut,
} from "./unionEnumValue/index.js";
export {
  unionFloatLiteralGet,
  unionFloatLiteralPut,
} from "./unionFloatLiteral/index.js";
export {
  unionIntLiteralGet,
  unionIntLiteralPut,
} from "./unionIntLiteral/index.js";
export {
  unionStringLiteralGet,
  unionStringLiteralPut,
} from "./unionStringLiteral/index.js";
export { unknownArrayGet, unknownArrayPut } from "./unknownArray/index.js";
export { unknownDictGet, unknownDictPut } from "./unknownDict/index.js";
export { unknownIntGet, unknownIntPut } from "./unknownInt/index.js";
export { unknownStringGet, unknownStringPut } from "./unknownString/index.js";
