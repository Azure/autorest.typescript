// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { UnionContext } from "../../api/unionContext.js";
import { StringAndArrayCases } from "../../models/models.js";
import {
  stringAndArrayGet,
  stringAndArraySend,
} from "../../api/stringAndArray/index.js";
import {
  StringAndArrayGetOptionalParams,
  StringAndArraySendOptionalParams,
} from "../../models/options.js";

export interface StringAndArrayOperations {
  get: (
    options?: StringAndArrayGetOptionalParams,
  ) => Promise<{ prop: StringAndArrayCases }>;
  send: (
    prop: StringAndArrayCases,
    options?: StringAndArraySendOptionalParams,
  ) => Promise<void>;
}

export function getStringAndArray(context: UnionContext) {
  return {
    get: (options?: StringAndArrayGetOptionalParams) =>
      stringAndArrayGet(context, options),
    send: (
      prop: StringAndArrayCases,
      options?: StringAndArraySendOptionalParams,
    ) => stringAndArraySend(context, prop, options),
  };
}

export function getStringAndArrayOperations(
  context: UnionContext,
): StringAndArrayOperations {
  return {
    ...getStringAndArray(context),
  };
}
