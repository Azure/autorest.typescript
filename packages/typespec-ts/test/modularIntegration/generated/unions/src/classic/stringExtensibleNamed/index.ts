// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { StringExtensibleNamedUnion } from "../../models/models.js";
import {
  stringExtensibleNamedGet,
  stringExtensibleNamedSend,
} from "../../api/stringExtensibleNamed/index.js";
import {
  StringExtensibleNamedGetOptions,
  StringExtensibleNamedSendOptions,
} from "../../models/options.js";

export interface StringExtensibleNamedOperations {
  get: (
    options?: StringExtensibleNamedGetOptions,
  ) => Promise<{ prop: StringExtensibleNamedUnion }>;
  send: (
    prop: StringExtensibleNamedUnion,
    options?: StringExtensibleNamedSendOptions,
  ) => Promise<void>;
}

export function getStringExtensibleNamed(context: UnionContext) {
  return {
    get: (options?: StringExtensibleNamedGetOptions) =>
      stringExtensibleNamedGet(context, options),
    send: (
      prop: StringExtensibleNamedUnion,
      options?: StringExtensibleNamedSendOptions,
    ) => stringExtensibleNamedSend(context, prop, options),
  };
}

export function getStringExtensibleNamedOperations(
  context: UnionContext,
): StringExtensibleNamedOperations {
  return {
    ...getStringExtensibleNamed(context),
  };
}
