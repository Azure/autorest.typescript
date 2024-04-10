// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createUnion,
  UnionClientOptions,
  UnionContext,
} from "./UnionContext.js";
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
