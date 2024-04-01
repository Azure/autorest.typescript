// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import {
  stringsOnlyGet,
  stringsOnlySend,
} from "../../api/stringsOnly/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface StringsOnlyOperations {
  get: (options?: GetOptions) => Promise<{ prop: "a" | "b" | "c" }>;
  send: (prop: "a" | "b" | "c", options?: SendOptions) => Promise<void>;
}

export function getStringsOnly(context: UnionContext) {
  return {
    get: (options?: GetOptions) => stringsOnlyGet(context, options),
    send: (prop: "a" | "b" | "c", options?: SendOptions) =>
      stringsOnlySend(context, prop, options),
  };
}

export function getStringsOnlyOperations(
  context: UnionContext,
): StringsOnlyOperations {
  return {
    ...getStringsOnly(context),
  };
}
