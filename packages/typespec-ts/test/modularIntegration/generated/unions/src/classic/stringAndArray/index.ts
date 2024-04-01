// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { StringAndArrayCases } from "../../models/models.js";
import {
  stringAndArrayGet,
  stringAndArraySend,
} from "../../api/stringAndArray/index.js";
import { GetOptions, SendOptions } from "../../models/options.js";

export interface StringAndArrayOperations {
  get: (options?: GetOptions) => Promise<{ prop: StringAndArrayCases }>;
  send: (prop: StringAndArrayCases, options?: SendOptions) => Promise<void>;
}

export function getStringAndArray(context: UnionContext) {
  return {
    get: (options?: GetOptions) => stringAndArrayGet(context, options),
    send: (prop: StringAndArrayCases, options?: SendOptions) =>
      stringAndArraySend(context, prop, options),
  };
}

export function getStringAndArrayOperations(
  context: UnionContext,
): StringAndArrayOperations {
  return {
    ...getStringAndArray(context),
  };
}
