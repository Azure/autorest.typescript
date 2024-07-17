// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import { StringExtensibleNamedUnion } from "../../models/models.js";
import {
  stringExtensibleNamedGet,
  stringExtensibleNamedSend,
} from "../../api/stringExtensibleNamed/index.js";
import {
  StringExtensibleNamedGetOptionalParams,
  StringExtensibleNamedSendOptionalParams,
} from "../../api/options.js";

/** Interface representing a StringExtensibleNamed operations. */
export interface StringExtensibleNamedOperations {
  get: (
    options?: StringExtensibleNamedGetOptionalParams,
  ) => Promise<{ prop: StringExtensibleNamedUnion }>;
  send: (
    prop: StringExtensibleNamedUnion,
    options?: StringExtensibleNamedSendOptionalParams,
  ) => Promise<void>;
}

export function getStringExtensibleNamed(context: UnionContext) {
  return {
    get: (options?: StringExtensibleNamedGetOptionalParams) =>
      stringExtensibleNamedGet(context, options),
    send: (
      prop: StringExtensibleNamedUnion,
      options?: StringExtensibleNamedSendOptionalParams,
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
