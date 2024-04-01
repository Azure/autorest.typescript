// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import {
  stringExtensibleGet,
  stringExtensibleSend,
} from "../../api/stringExtensible/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface StringExtensibleOperations {
  get: (options?: GetOptions) => Promise<{ prop: string | "b" | "c" }>;
  send: (prop: string | "b" | "c", options?: SendOptions) => Promise<void>;
}

export function getStringExtensible(context: UnionContext) {
  return {
    get: (options?: GetOptions) => stringExtensibleGet(context, options),
    send: (prop: string | "b" | "c", options?: SendOptions) =>
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
