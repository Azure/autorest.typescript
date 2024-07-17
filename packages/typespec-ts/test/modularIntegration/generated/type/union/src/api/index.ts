// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  StringsOnlyGetOptionalParams,
  StringsOnlySendOptionalParams,
  StringExtensibleGetOptionalParams,
  StringExtensibleSendOptionalParams,
  StringExtensibleNamedGetOptionalParams,
  StringExtensibleNamedSendOptionalParams,
  IntsOnlyGetOptionalParams,
  IntsOnlySendOptionalParams,
  FloatsOnlyGetOptionalParams,
  FloatsOnlySendOptionalParams,
  ModelsOnlyGetOptionalParams,
  ModelsOnlySendOptionalParams,
  EnumsOnlyGetOptionalParams,
  EnumsOnlySendOptionalParams,
  StringAndArrayGetOptionalParams,
  StringAndArraySendOptionalParams,
  MixedLiteralsGetOptionalParams,
  MixedLiteralsSendOptionalParams,
  MixedTypesGetOptionalParams,
  MixedTypesSendOptionalParams,
} from "./options.js";
export {
  createUnion,
  UnionClientOptionalParams,
  UnionContext,
} from "./unionContext.js";
export { enumsOnlyGet, enumsOnlySend } from "./enumsOnly/index.js";
export { floatsOnlyGet, floatsOnlySend } from "./floatsOnly/index.js";
export { intsOnlyGet, intsOnlySend } from "./intsOnly/index.js";
export { mixedLiteralsGet, mixedLiteralsSend } from "./mixedLiterals/index.js";
export { mixedTypesGet, mixedTypesSend } from "./mixedTypes/index.js";
export { modelsOnlyGet, modelsOnlySend } from "./modelsOnly/index.js";
export {
  stringAndArrayGet,
  stringAndArraySend,
} from "./stringAndArray/index.js";
export {
  stringExtensibleGet,
  stringExtensibleSend,
} from "./stringExtensible/index.js";
export {
  stringExtensibleNamedGet,
  stringExtensibleNamedSend,
} from "./stringExtensibleNamed/index.js";
export { stringsOnlyGet, stringsOnlySend } from "./stringsOnly/index.js";
