// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { StringExtensibleNamedUnion } from "../../models/models.js";
import {
  stringExtensibleNamedGet,
  stringExtensibleNamedSend,
} from "../../api/stringExtensibleNamed/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface StringExtensibleNamedOperations {
  get: (options?: GetOptions) => Promise<{ prop: StringExtensibleNamedUnion }>;
  send: (
    prop: StringExtensibleNamedUnion,
    options?: SendOptions,
  ) => Promise<void>;
}

export function getStringExtensibleNamed(context: UnionContext) {
  return {
    get: (options?: GetOptions) => stringExtensibleNamedGet(context, options),
    send: (prop: StringExtensibleNamedUnion, options?: SendOptions) =>
      stringExtensibleNamedSend(context, prop, options),
  };
}

export function getStringExtensibleNamedOperations(
  context: UnionContext,
): StringExtensibleNamedOperations {
  return {
    ...getStringExtensibleNamed(context),
  };
}
