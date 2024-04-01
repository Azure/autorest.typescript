// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/UnionContext.js";
import { StringAndArrayCases } from "../../models/models.js";
import {
  stringAndArrayGet,
  stringAndArraySend,
} from "../../api/stringAndArray/index.js";
import {
  StringAndArrayGetOptions,
  StringAndArraySendOptions,
} from "../../models/options.js";

export interface StringAndArrayOperations {
  get: (
    options?: StringAndArrayGetOptions,
  ) => Promise<{ prop: StringAndArrayCases }>;
  send: (
    prop: StringAndArrayCases,
    options?: StringAndArraySendOptions,
  ) => Promise<void>;
}

export function getStringAndArray(context: UnionContext) {
  return {
    get: (options?: StringAndArrayGetOptions) =>
      stringAndArrayGet(context, options),
    send: (prop: StringAndArrayCases, options?: StringAndArraySendOptions) =>
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
