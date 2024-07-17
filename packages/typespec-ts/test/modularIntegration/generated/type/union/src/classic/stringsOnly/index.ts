// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import {
  stringsOnlyGet,
  stringsOnlySend,
} from "../../api/stringsOnly/index.js";
import {
  StringsOnlyGetOptionalParams,
  StringsOnlySendOptionalParams,
} from "../../api/options.js";

/** Interface representing a StringsOnly operations. */
export interface StringsOnlyOperations {
  get: (
    options?: StringsOnlyGetOptionalParams,
  ) => Promise<{ prop: "a" | "b" | "c" }>;
  send: (
    prop: "a" | "b" | "c",
    options?: StringsOnlySendOptionalParams,
  ) => Promise<void>;
}

export function getStringsOnly(context: UnionContext) {
  return {
    get: (options?: StringsOnlyGetOptionalParams) =>
      stringsOnlyGet(context, options),
    send: (prop: "a" | "b" | "c", options?: StringsOnlySendOptionalParams) =>
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
