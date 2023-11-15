// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  sendInt,
  sendIntArray,
  sendFirstNamedUnionValue,
  sendSecondNamedUnionValue,
  receiveString,
  receiveIntArray,
  receiveFirstNamedUnionValue,
  receiveSecondNamedUnionValue,
} from "./operations.js";
export {
  createUnion,
  UnionClientOptions,
  UnionContext,
} from "./UnionContext.js";
