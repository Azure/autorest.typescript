// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import {
  stringsOnlyGet,
  stringsOnlySend,
} from "../../api/stringsOnly/index.js";
import {
  StringsOnlyGetOptions,
  StringsOnlySendOptions,
} from "../../models/options.js";

export interface StringsOnlyOperations {
  get: (options?: StringsOnlyGetOptions) => Promise<{ prop: "a" | "b" | "c" }>;
  send: (
    prop: "a" | "b" | "c",
    options?: StringsOnlySendOptions,
  ) => Promise<void>;
}

export function getStringsOnly(context: UnionContext) {
  return {
    get: (options?: StringsOnlyGetOptions) => stringsOnlyGet(context, options),
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptions) =>
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
