// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import {
  stringExtensibleGet,
  stringExtensibleSend,
} from "../../api/stringExtensible/index.js";
import {
  StringExtensibleGetOptions,
  StringExtensibleSendOptions,
} from "../../models/options.js";

export interface StringExtensibleOperations {
  get: (options?: StringExtensibleGetOptions) => Promise<{ prop: "b" | "c" }>;
  send: (
    prop: "b" | "c",
    options?: StringExtensibleSendOptions,
  ) => Promise<void>;
}

export function getStringExtensible(context: UnionContext) {
  return {
    get: (options?: StringExtensibleGetOptions) =>
      stringExtensibleGet(context, options),
    send: (prop: "b" | "c", options?: StringExtensibleSendOptions) =>
      stringExtensibleSend(context, prop, options),
  };
}

export function getStringExtensibleOperations(
  context: UnionContext,
): StringExtensibleOperations {
  return {
    ...getStringExtensible(context),
  };
}
