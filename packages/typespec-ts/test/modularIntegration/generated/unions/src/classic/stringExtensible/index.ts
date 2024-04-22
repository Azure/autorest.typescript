// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import {
  stringExtensibleGet,
  stringExtensibleSend,
} from "../../api/stringExtensible/index.js";
import {
  StringExtensibleGetOptionalParams,
  StringExtensibleSendOptionalParams,
} from "../../models/options.js";

export interface StringExtensibleOperations {
  get: (
    options?: StringExtensibleGetOptionalParams,
  ) => Promise<{ prop: string | "b" | "c" }>;
  send: (
    prop: string | "b" | "c",
    options?: StringExtensibleSendOptionalParams,
  ) => Promise<void>;
}

export function getStringExtensible(context: UnionContext) {
  return {
    get: (options?: StringExtensibleGetOptionalParams) =>
      stringExtensibleGet(context, options),
    send: (
      prop: string | "b" | "c",
      options?: StringExtensibleSendOptionalParams,
    ) => stringExtensibleSend(context, prop, options),
  };
}

export function getStringExtensibleOperations(
  context: UnionContext,
): StringExtensibleOperations {
  return {
    ...getStringExtensible(context),
  };
}
